'use client';

import TableProducts from "../_components/tableProducts";



  
export default function Dashboard() {
    return (
        <>
        <h1 className="text-3xl text-white font-bold mb-5 text-center">Lista de productos</h1>
        <main className=" ">
            <TableProducts></TableProducts>
        </main>
        </>
    );
}