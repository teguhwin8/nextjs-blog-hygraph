import React, {useState, useRef} from 'react';

export default function Comment() {
  const [error, setError] = useState(false);
  // const [localStorage, setLocalStorage] = useState(null);
  // const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  console.log(error);

  const commentElement = useRef();
  const nameElement = useRef();
  const emailElement = useRef();
  const storeDataElement = useRef();

  const handleSubmitComment = (e) => {
    e.preventDefault();
    setError(false);

    const {value: name} = nameElement.current;
    const {value: email} = emailElement.current;
    const {value: comment} = commentElement.current;
    const {checked: storeData} = storeDataElement.current;

    if (!name || !email || !comment) {
      setError(true);
      return;
    }

    if (storeData) {
      window.localStorage.setItem('comment_name', name);
      window.localStorage.setItem('comment_email', email);
    } else {
      window.localStorage.removeItem('comment_name');
      window.localStorage.removeItem('comment_email');
    }
  };

  return (
    <>
      <div className="card p-6">
        <div className="card-title mb-4">Komentar</div>
        <div className="card-body">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nama"
                ref={nameElement}
              />
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                ref={emailElement}
              />
            </div>
            <div className="mt-4">
              <textarea
                name="comment"
                id="comment"
                rows="4"
                className="form-control"
                placeholder="Komentar"
                ref={commentElement}
              />
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2">
              <div className="flex items-center mb-6 md:mb-0 gap-3">
                <input
                  type="checkbox"
                  className="checkbox cursor-pointer"
                  id="saveEmailAndName"
                  ref={storeDataElement}
                />
                <label
                  htmlFor="saveEmailAndName"
                  className="text-gray-500 text-md cursor-pointer"
                >
                  Simpan nama dan email di browser ini?
                </label>
              </div>
              <div className="text-center md:text-right">
                <button
                  type="button"
                  className="px-6 py-3 bg-pink-700 text-white transition
                  duration-300 transform hover:bg-pink-800 rounded-full"
                  onClick={handleSubmitComment}
                >
                  Kirim Komentar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
