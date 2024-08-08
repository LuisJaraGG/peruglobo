'use client'

import { useState, useEffect } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock function to simulate fetching data
const fetchInvoices = (page: number): Promise<{ data: any[]; total: number }> => {
  const invoicesPerPage = 5; // Number of invoices per page
  const totalInvoices = 60; // Total number of invoices
  const invoices = Array.from({ length: totalInvoices }, (_, i) => ({
    id: `INV${String(i + 1).padStart(3, '0')}`,
    status: i % 2 === 0 ? 'Paid' : 'Pending',
    method: i % 3 === 0 ? 'Credit Card' : 'PayPal',
    amount: (i + 1) * 100,
  }));

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: invoices.slice((page - 1) * invoicesPerPage, page * invoicesPerPage),
        total: totalInvoices,
      });
    }, 500);
  });
};

export default function TableProducts() {
  const [page, setPage] = useState(1);
  const [invoices, setInvoices] = useState<any[]>([]);
  const [totalInvoices, setTotalInvoices] = useState(0);

  useEffect(() => {
    const loadInvoices = async () => {
      const { data, total } = await fetchInvoices(page);
      setInvoices(data);
      setTotalInvoices(total);
    };

    loadInvoices();
  }, [page]);

  const totalPages = Math.ceil(totalInvoices / 5); // Assuming 5 invoices per page

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (page <= 2) {
        pages.push(1, 2, 3);
        if (totalPages > 3) pages.push('...');
      } else if (page > 2 && page < totalPages - 1) {
        pages.push('...', page - 1, page, page + 1, '...');
      } else {
        pages.push('...', totalPages - 2, totalPages - 1, totalPages);
      }
    }
    return pages;
  };

  return (
    <>
      <Table className='text-white mb-5'>
        <TableCaption>Lista de los ultimo productos inflafles.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className=" text-white font-extrabold w-[100px]">Invoice</TableHead>
            <TableHead className=' text-white font-extrabold ' >Status</TableHead>
            <TableHead className=' text-white font-extrabold '>Method</TableHead>
            <TableHead className=" text-white font-extrabold text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>{invoice.status}</TableCell>
              <TableCell>{invoice.method}</TableCell>
              <TableCell className="text-right">${invoice.amount.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination className="text-white">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              href="#" 
              onClick={(e) => { e.preventDefault(); if (page > 1) setPage(page - 1); }} 
            />
          </PaginationItem>
          {getPageNumbers().map((p, index) => (
            <PaginationItem key={index}>
              {typeof p === 'number' ? (
                <PaginationLink 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); setPage(p); }}
                  className={page === p ? 'active-pagination' : ''}
                >
                  {p}
                </PaginationLink>
              ) : (
                <PaginationEllipsis />
              )}
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext 
              href="#" 
              onClick={(e) => { e.preventDefault(); if (page < totalPages) setPage(page + 1); }} 
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
