export interface Register {
    message: string
}
  
export interface Login {
    access: string;
    refresh: string;
}
  
export interface Refresh {
    access: string;
}
