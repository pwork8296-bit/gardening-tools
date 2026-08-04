import React from "react";

export interface ClientItem {
  name: string;
  title: string;
  amount: string;
  status: string;
  statusBadge: string;
  date: string;
  avatar: string;
}

interface DataTableProps {
  data: ClientItem[];
}

export default function DataTable({ data }: DataTableProps) {
  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xs mb-8">
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-no-wrap">
          <thead>
            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
              <th className="px-4 py-3">Client</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
            {data.map((client, idx) => (
              <tr key={idx} className="text-gray-700 dark:text-gray-400">
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src={client.avatar}
                        alt={client.name}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                    </div>
                    <div>
                      <p className="font-semibold">{client.name}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{client.title}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">{client.amount}</td>
                <td className="px-4 py-3 text-xs">
                  <span className={`px-2 py-1 font-semibold leading-tight rounded-full ${client.statusBadge}`}>
                    {client.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">{client.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination Footer */}
      <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
        <span className="flex items-center col-span-3">Showing 21-30 of 100</span>
        <span className="col-span-2"></span>
        <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
          <nav aria-label="Table navigation">
            <ul className="inline-flex items-center">
              <li>
                <button className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple" aria-label="Previous">
                  <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
                  </svg>
                </button>
              </li>
              <li><button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">1</button></li>
              <li><button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">2</button></li>
              <li><button className="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple">3</button></li>
              <li><button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">4</button></li>
              <li><span className="px-3 py-1">...</span></li>
              <li><button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">8</button></li>
              <li><button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">9</button></li>
              <li>
                <button className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple" aria-label="Next">
                  <svg className="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                    <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        </span>
      </div>
    </div>
  );
}
