import React, { useEffect, useState } from "react";
import { request } from "../middleware";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    request("books", "GET", {}, (data: any) => {
      setBooks(data);
    });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            {/* <th>Author</th> */}
          </tr>
        </thead>
        <tbody>
          {books.map(({ Id, Title }, i) => (
            // author: {
            //   firstname,
            //   lastname
            // }
            <tr key={i}>
              <td>{Id}</td>
              <td>{Title}</td>
              {/* <td>{firstname + lastname}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
