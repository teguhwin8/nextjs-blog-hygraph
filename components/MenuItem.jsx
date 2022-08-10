import Link from "next/link";

export default function MenuItem() {
    return (
        <>
            <Link href="/categories">
                <a className="align-middle font-semibold cursor-pointer">Kategori</a>
            </Link>
            <Link href="/course">
                <a className="align-middle font-semibold cursor-pointer">Kursus</a>
            </Link>
            <Link href="/about">
                <a className="align-middle font-semibold cursor-pointer">Tentang</a>
            </Link>
            <Link href="/contact">
                <a className="align-middle font-semibold cursor-pointer">Hubungi</a>
            </Link>
        </>
    );
}
