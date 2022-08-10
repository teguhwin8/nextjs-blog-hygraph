import React from "react";
import Head from "next/head";
import { Categories, PostWidget } from "../components";
import lottieJson from "../public/not_found.json";
import Lottie from "react-lottie-player";
import Link from "next/link";
import { Layout } from "../components";

export default function NotFound() {
    return (
        <Layout>
            <Head>
                <title>Halaman Tidak Ditemukan</title>
            </Head>
            <div className="container mx-auto md:px-10 md:mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12">
                    <div className="lg:col-span-8 col-span-1">
                        <div className="card p-6">
                            <div className="w-1/2 mx-auto">
                                <Lottie loop animationData={lottieJson} play className="w-full" />
                            </div>
                            <div className="prose max-w-none text-center my-10">
                                <h2>Oops, maaf halaman yang kamu cari belum tersedia.</h2>
                            </div>
                            <div className="flex justify-center mb-8">
                                <Link href="/">
                                    <a className="px-6 py-3 bg-pink-700 text-white transition duration-300 transform hover:-translate-y-1 inline-block relative rounded-full">
                                        Balik ke Home
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-4 col-span-1">
                        <div className="lg:sticky relative md:top-8">
                            <PostWidget />
                            <Categories />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
