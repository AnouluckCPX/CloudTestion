"use client";

import Header from "../_components/layoutProfile/Header";

export const ProfileLayout = ({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) => {

    return (
        <section className='bg-[#f4f5f9] '>
            <Header />
            <div className="pb-20">
                {children}
            </div>
        </section>
    );
};

export default ProfileLayout;
