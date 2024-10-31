import { useMemo } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import { Product } from '../../types';
import DataTable from './DataTable';
import { Edit, Trash2 } from 'lucide-react';

const columnHelper = createColumnHelper<Product>();

export default function ProductsTable({ products }: { products: Product[] }) {
  const columns = useMemo(
    () => [
      columnHelper.accessor('name', {
        header: 'Product Name',
        cell: (info) => (
          <div className="flex items-center gap-3">
            <img
              src={info.row.original.image}
              alt={info.getValue()}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span>{info.getValue()}</span>
          </div>
        ),
      }),
      columnHelper.accessor('price', {
        header: 'Price',
        cell: (info) => `${info.getValue().toLocaleString()} FCFA`,
      }),
      columnHelper.accessor('category', {
        header: 'Category',
      }),
      columnHelper.accessor('region', {
        header: 'Region',
      }),
      columnHelper.accessor('stock', {
        header: 'Stock',
      }),
      columnHelper.accessor('status', {
        header: 'Status',
        cell: (info) => (
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              info.getValue() === 'active'
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {info.getValue()}
          </span>
        ),
      }),
      columnHelper.display({
        id: 'actions',
        header: 'Actions',
        cell: (info) => (
          <div className="flex items-center gap-2">
            <button
              onClick={() => console.log('Edit', info.row.original.id)}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
            >
              <Edit className="w-4 h-4" />
            </button>
            <button
              onClick={() => console.log('Delete', info.row.original.id)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-full"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ),
      }),
    ],
    []
  );

  return <DataTable data={products} columns={columns} searchPlaceholder="Search products..." />;
}