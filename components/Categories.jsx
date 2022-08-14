import Link from "next/link";

const Categories = ({ categories }) => {
  if (!categories) {
    return "";
  }
  return (
    <>
      <div className="card px-6 py-5">
        <h2 className="text-lg font-medium mb-3">Kategori</h2>
        {categories.length > 0 &&
          categories.map((cat) => (
            <Link href={`/categories/${cat.slug}`} key={cat.id}>
              <a className="py-3 border-b border-b-gray-200 block transition duration-300 hover:text-pink-700 text-gray-700">
                {cat.name}
              </a>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Categories;

