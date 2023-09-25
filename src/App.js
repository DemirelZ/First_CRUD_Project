import "./App.css";
import BookCard from "./components/BookCard/BookCard";

import { useState } from "react";
import CustomButton, { ADD_TYPE } from "./components/CustomButton";
import { toast } from "react-toastify";

function App() {
  const [bookName, setBookName] = useState("");
  const [bookList, setBookList] = useState([]);

  function addBook(e) {
    e.preventDefault();

    const newBook = {
      name: bookName,
      id: new Date().getTime(),
      date: new Date().toLocaleString(),
      isRead: false,
    };

    setBookList([...bookList, newBook]);

    setBookName("");

    toast.success("Kitap başarıyla eklendi");
  }

  //Silme işlemi

  function deleteBook(deleteId) {
    const filteredList = bookList.filter((book) => book.id != deleteId);

    setBookList(filteredList);

    toast.error("Kitap başarıyla silindi");
  }

  // Change Status

  const changeStatus = (book) => {
    console.log(book.isRead);
    const changedStatusBook = { ...book, isRead: !book.isRead };
    console.log(changedStatusBook.isRead);
    const cloneList = [...bookList];
    console.log(cloneList);

    const indexBook = cloneList.findIndex((item) => item.id === book.id);

    cloneList.splice(indexBook, 1, changedStatusBook);

    setBookList(cloneList);

    toast("Tebrikler...");
  };

  const handleEdit = (bookToUpdate, newTitle) => {
    const updatedBook = { ...bookToUpdate, name: newTitle };

    // console.log(updatedBook);

    const newList = bookList.map((book) =>
      book.id !== updatedBook.id ? book : updatedBook
    );

    // console.log(newList);

    // console.log(newList);
    setBookList(newList);

    toast.info("Kitap başarıyla güncellendi");
  };

  return (
    <div>
      <header className="bg-dark text-light text-center py-3 fs-5">
        Kitap Kurdu
      </header>
      <div className="container border pb-5">
        <form className="d-flex gap-3 my-4" onSubmit={(e) => addBook(e)}>
          <input
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            className="form-control shadow"
            type="text"
            placeholder="Lütfen Kitap İsmi Giriniz"
          />
          <CustomButton title={"Ekle"} type={ADD_TYPE} />
        </form>
        <BookCard
          bookList={bookList}
          deleteBook={deleteBook}
          changeStatus={changeStatus}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default App;
