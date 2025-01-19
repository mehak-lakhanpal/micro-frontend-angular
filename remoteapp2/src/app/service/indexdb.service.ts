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
    // request.onupgradeneeded = (event: any) => {
    //   this.db = event.target.result;
    //   if (!this.db.objectStoreNames.contains(this.storeName)) {
    //     const store = this.db.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: true });
    //     console.log(store)
    //     store.createIndex("insurance_name", ["name"], { unique: false });
    //     console.log(store)
    //   }
    // };
    request.onsuccess = (event: any) => {
      this.db = event.target.result;
      const transaction = this.db.transaction(this.storeName, 'readwrite');
      const store = transaction.objectStore(this.storeName);
      console.log(store);
    };
    request.onerror = (event) => {
      console.error('Error initializing database:', event);
    };
  }
  // addData(data: any): Promise<number> {
  //   return new Promise((resolve, reject) => {
  //     const transaction = this.db.transaction(this.storeName, 'readwrite');
  //     const store = transaction.objectStore(this.storeName);
  //     const request = store.add(data);
  //     request.onsuccess = () => resolve(request.result as number);
  //     request.onerror = () => reject(request.error);
  //   });
  // }
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
  // updateData(data: any): Promise<void> {
  //   return new Promise((resolve, reject) => {
  //     const transaction = this.db.transaction(this.storeName, 'readwrite');
  //     const store = transaction.objectStore(this.storeName);
  //     const request = store.put(data);
  //     request.onsuccess = () => resolve();
  //     request.onerror = () => reject(request.error);
  //   });
  // }
  // deleteData(id: number): Promise<void> {
  //   return new Promise((resolve, reject) => {
  //     const transaction = this.db.transaction(this.storeName, 'readwrite');
  //     const store = transaction.objectStore(this.storeName);
  //     const request = store.delete(id);
  //     request.onsuccess = () => resolve();
  //     request.onerror = () => reject(request.error);
  //   });
  // }
}
