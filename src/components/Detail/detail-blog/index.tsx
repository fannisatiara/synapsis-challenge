import React, { FC } from "react";
import { TypeDetail } from "@/data/Type/type-detail";

const DetailBlog: FC<TypeDetail> = (props) => {
    return (
        <div className="flex flex-col gap-4 py-6 md:px-10">
            <div className="font-bold text-yellow-500 text-xl md:text-2xl">
                {props.title}
            </div>
            <div className="text-base md:text-xl text-justify">
                {props.desc}
            </div>
            <p className="font-bold text-yellow-500 text-xl">Comment</p>
            {props.comment.length > 0 ? (
                props.comment.map((e, index) => (
                    <div key={index} className="py-2">
                        <div className="font-bold text-base md:text-xl">{e.name}</div>
                        <div className="text-base md:text-xl">{e.body}</div>
                    </div>
                ))
            ) : (
                <div>-</div>
            )}
        </div>
    );
};

export default DetailBlog;
