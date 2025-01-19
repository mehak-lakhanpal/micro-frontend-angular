import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexdbService {

  private dbName = 'InsuranceDB';
  private storeName = 'Insurance';
  private db!: IDBDatabase;
  constructor() {
    this.initDB();
  }
  initDB() {
    const request = indexedDB.open(this.dbName, 1);
    request.onupgradeneeded = (event: any) => {
      this.db = event.target.result;
      if (!this.db.objectStoreNames.contains(this.storeName)) {
        const store = this.db.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: true });
        console.log(store)
        store.createIndex("insurance_name", ["name"], { unique: false });
        console.log(store)
      }
    };
    request.onsuccess = (event: any) => {
      this.db = event.target.result;
      const transaction = this.db.transaction(this.storeName, 'readwrite');
      const store = transaction.objectStore(this.storeName);
      // const insurance_name = store.index("insurance_name");
      // store.put({ idn: 1, name: "Dinesh", age: "40", policyNo: 156872, sumInsured: 300000, used:0, buyDate:"20-June-2024", validTill:"20-June-2025", status:"Active" });
      // const nameQuery = insurance_name.getAll(["Dinesh"]);
      // nameQuery.onsuccess = function () {
      //   console.log('nameQuery', nameQuery.result);
      // };
      store.put({ name: "Dinesh", age: "40", policyNo: 156872, sumInsured: 300000, used:0, buyDate:"20-June-2024", validTill:"20-June-2025", status:"Active" });
      store.put({ name: "Mahir", age: "45", policyNo: 156872, sumInsured: 300000, used:150000, buyDate:"20-June-2024", validTill:"20-June-2025", status:"Active" });
      console.log('Database initialized successfully');
      console.log(store)
      // this.addData({ id: 1, name: "Dinesh", age: "40", policyNo: 156872, sumInsured: 300000, used:0, buyDate:"20-June-2024", validTill:"20-June-2025", status:"Active" })
    };
    request.onerror = (event) => {
      console.error('Error initializing database:', event);
    };
  }
  addData(data: any): Promise<number> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(this.storeName, 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.add(data);
      request.onsuccess = () => resolve(request.result as number);
      request.onerror = () => reject(request.error);
    });
  }
  getAllData(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(this.storeName, 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const insuranceIndex = store.index("insurance_name");
      const request = insuranceIndex.getAll(["Dinesh"]);
      // const request = store.getAll();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
  updateData(data: any): Promise<void> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(this.storeName, 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.put(data);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }
  deleteData(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(this.storeName, 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.delete(id);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }
}
