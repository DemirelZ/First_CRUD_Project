import React from "react";

import CustomButton, {
  DELETE_TYPE,
  EDIT_TYPE,
  READ_TYPE,
  SAVE_TYPE,
} from "../CustomButton";

import { useState } from "react";

const BookCard = ({ bookList, deleteBook, changeStatus, handleEdit }) => {
  const [editBook, setEditBook] = useState(false);

  // console.log(editBook);
  return (
    <div className="d-flex flex-column gap-4">
      {bookList.length === 0 ? (
        <p className="text-center mt-5">Henüz bir kitap eklenmedi</p>
      ) : (
        bookList.map((book) => {
          return (
            <div className="d-flex justify-content-between align-items-center p-3 border shadow">
              <div className="d-flex flex-column">
                {editBook ? (
                  <form
                    className="d-flex"
                    onSubmit={(e) => {
                      e.preventDefault();

                      handleEdit(book, e.target[0].value);

                      setEditBook(false);
                    }}
                  >
                    <input
                      className="form-control shadow"
                      defaultValue={book.name}
                    />
                    <CustomButton title={"Kaydet"} type={SAVE_TYPE} />
                  </form>
                ) : (
                  <h5
                    style={{
                      textDecoration: book.isRead ? "line-through" : "none",
                    }}
                  >
                    {book.name}
                  </h5>
                )}
                <p>{book.date}</p>
              </div>
              <div className="btn-group">
                <CustomButton
                  title={"Sil"}
                  onclick={() => deleteBook(book.id)}
                  type={DELETE_TYPE}
                />
                <CustomButton
                  title={editBook ? "Düzenlemeyi iptal et" : "Düzenle"}
                  onclick={() => setEditBook(!editBook)}
                  type={EDIT_TYPE}
                />
                <CustomButton
                  title={book.isRead == false ? "Okunmadı" : "Okundu"}
                  onclick={() => changeStatus(book)}
                  type={READ_TYPE}
                />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default BookCard;
