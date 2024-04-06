import Marquee from "react-fast-marquee";


const BreakingNews = () => {
    return (
        <div className="flex gap-3 bg-base-200 p-4 mb-8 cursor-pointer">
            <button className="btn btn-secondary rounded-none">Breaking News</button>
            <Marquee pauseOnHover={true} speed={80}>
                <div className="flex">
                    <p className="px-10">
                        (1). Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste expedita veritatis
                    </p>
                    <p className="px-10">
                        (2). Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro consequatur,
                    </p>
                    <p className="px-10">
                        (3). Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, sapiente!
                    </p>
                </div>
            </Marquee>
        </div>
    );
};

export default BreakingNews;