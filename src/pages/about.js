import RootLayout from "@/components/Layoutes/RootLayout";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase.auth";

const About = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const tableData = [
    {
      id: 1,
      name: "John Doe",
      name1: "Bob Smith",
      name2: "Bob Smith",
      age: 25,
      city: "New York",
    },
    {
      id: 2,
      name: "Jane Doe",
      name1: "Bob Smith",
      name2: "Bob Smith",
      age: 30,
      city: "San Francisco",
    },
    {
      id: 3,
      name1: "Bob Smith",
      name2: "Bob Smith",
      name: "Bob Smith",
      age: 22,
      city: "Los Angeles",
    },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h2>About</h2>

      <div className='container w-[300px] mx-auto mt-8'>
        <div className='overflow-x-auto'>
          <table className='min-w-full border border-gray-300 divide-y divide-gray-300'>
            <thead>
              <tr>
                <th className='py-2 px-4 bg-gray-200'>ID</th>
                <th className='py-2 px-4 bg-gray-200'>Name</th>
                <th className='py-2 px-4 bg-gray-200'>Name</th>
                <th className='py-2 px-4 bg-gray-200'>Name</th>
                <th className='py-2 px-4 bg-gray-200'>Age</th>
                <th className='py-2 px-4 bg-gray-200'>City</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id}>
                  <td className='py-2 px-4'>{row.id}</td>
                  <td className='py-2 px-4'>{row.name}</td>
                  <td className='py-2 px-4'>{row.name1}</td>
                  <td className='py-2 px-4'>{row.name2}</td>
                  <td className='py-2 px-4'>{row.age}</td>
                  <td className='py-2 px-4'>{row.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default About;

About.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
