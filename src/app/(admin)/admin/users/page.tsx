import React from "react";
import CtaBanner from "@/components/admin/CtaBanner";

export default function AdminUsersPage() {
  const usersList = [
    {
      name: "Hans Burger",
      title: "10x Developer",
      amount: "$ 863.45",
      status: "Approved",
      statusBadge: "text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100",
      date: "6/10/2020",
      avatar: "https://images.unsplash.com/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
    },
    {
      name: "Jolina Angelie",
      title: "Unemployed",
      amount: "$ 369.95",
      status: "Pending",
      statusBadge: "text-orange-700 bg-orange-100 dark:text-white dark:bg-orange-600",
      date: "6/10/2020",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200",
    },
    {
      name: "Sarah Curry",
      title: "Designer",
      amount: "$ 86.00",
      status: "Denied",
      statusBadge: "text-red-700 bg-red-100 dark:text-red-100 dark:bg-red-700",
      date: "6/10/2020",
      avatar: "https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200",
    },
    {
      name: "Rulia Joberts",
      title: "Actress",
      amount: "$ 1276.45",
      status: "Approved",
      statusBadge: "text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100",
      date: "6/10/2020",
      avatar: "https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200",
    },
    {
      name: "Wenzel Dashington",
      title: "Actor",
      amount: "$ 863.45",
      status: "Expired",
      statusBadge: "text-gray-700 bg-gray-100 dark:text-gray-100 dark:bg-gray-700",
      date: "6/10/2020",
      avatar: "https://images.unsplash.com/photo-1546456073-6712f79251bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200",
    },
    {
      name: "Dave Li",
      title: "Influencer",
      amount: "$ 863.45",
      status: "Approved",
      statusBadge: "text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100",
      date: "6/10/2020",
      avatar: "https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200",
    },
    {
      name: "Maria Ramovic",
      title: "Runner",
      amount: "$ 863.45",
      status: "Approved",
      statusBadge: "text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100",
      date: "6/10/2020",
      avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200",
    },
    {
      name: "Hitney Wouston",
      title: "Singer",
      amount: "$ 863.45",
      status: "Approved",
      statusBadge: "text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100",
      date: "6/10/2020",
      avatar: "https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between my-6">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Users & Client Tables
        </h2>
        <button className="px-4 py-2 text-sm font-medium leading-5 text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
          + Add New User
        </button>
      </div>

      {/* CTA Banner */}
      {/* <CtaBanner /> */}

      {/* Table with Actions */}
      <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
        Table with actions
      </h4>
      <div className="w-full overflow-hidden rounded-lg shadow-xs mb-8">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th className="px-4 py-3">Client</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              {usersList.map((user, idx) => (
                <tr key={idx} className="text-gray-700 dark:text-gray-400">
                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                      <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src={user.avatar}
                          alt={user.name}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                      </div>
                      <div>
                        <p className="font-semibold">{user.name}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{user.title}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">{user.amount}</td>
                  <td className="px-4 py-3 text-xs">
                    <span className={`px-2 py-1 font-semibold leading-tight rounded-full ${user.statusBadge}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">{user.date}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-4 text-sm">
                      {/* Edit Button */}
                      <button
                        className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                        aria-label="Edit"
                        title="Edit User"
                      >
                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                        </svg>
                      </button>
                      {/* Delete Button */}
                      <button
                        className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                        aria-label="Delete"
                        title="Delete User"
                      >
                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
          <span className="flex items-center col-span-3">Showing 1-8 of 100</span>
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
    </>
  );
}
