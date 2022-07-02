import PreviousBtn from "./PreviousBtn";
import ModifyBtn from "./ModifyBtn";
import DeleteBtn from "./DeleteBtn";
import LikeBtn from "./LikeBtn";
import CategoryBtn from "./CategoryBtn";
import "./postDetail.css";

export default function PostDetail(props) {
    return (
        <div>
            <div className="post-banner">
                <img src={`${props.mainBg}`} alt="" />
                <div className="post-banner-inside">
                    <div className="post-banner-date-cont">
                        <span>{props.date[0]}</span>
                        <span>{props.date[1]}</span>
                        <span>{props.date[2]}</span>
                    </div>
                </div>
            </div>
            <article className="post-wrap">
                <div className="post-inner">
                    <header>
                        <PreviousBtn />
                        <div className="author-wrap">
                            <img src={props.writerProfileImg} alt="" />
                            <span className="writer">Chilli</span>

                            <span className="date">{props.created}</span>
                        </div>
                        <div className="category-wrap">
                            {props.categories.map((category, index) => {
                                return (
                                    <CategoryBtn
                                        key={index}
                                        theme={category}
                                        className="blue"
                                    />
                                );
                            })}
                        </div>
                        <h2>{props.title}</h2>
                        <div className="like-wrap">
                            <LikeBtn />
                        </div>
                    </header>
                    <main className="post-main">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Inventore illum nostrum perferendis voluptas,
                            voluptate soluta corrupti dolore quidem. Placeat,
                            eaque! Exercitationem est facilis dolor quas odio
                            cum incidunt repudiandae vel. Lorem ipsum dolor sit
                            amet consectetur, adipisicing elit. Inventore illum
                            nostrum perferendis voluptas, voluptate soluta
                            corrupti dolore quidem. Placeat, eaque!
                            Exercitationem est facilis dolor quas odio cum
                            incidunt repudiandae vel. Lorem ipsum dolor sit amet
                            consectetur, adipisicing elit. Inventore illum
                            nostrum perferendis voluptas, voluptate soluta
                            corrupti dolore quidem. Placeat, eaque!
                            Exercitationem est facilis dolor quas odio cum
                            incidunt repudiandae vel. Lorem ipsum dolor sit amet
                            consectetur, adipisicing elit. Inventore illum
                            nostrum perferendis voluptas, voluptate soluta
                            corrupti dolore quidem. Placeat, eaque!
                            Exercitationem est facilis dolor quas odio cum
                            incidunt repudiandae vel.
                        </p>
                        {/* <img src={`../../`} alt="" /> */}
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Inventore illum nostrum perferendis voluptas,
                            voluptate soluta corrupti dolore quidem. Placeat,
                            eaque! Exercitationem est facilis dolor quas odio
                            cum incidunt repudiandae vel. Lorem ipsum dolor sit
                            amet consectetur, adipisicing elit. Inventore illum
                            nostrum perferendis voluptas, voluptate soluta
                            corrupti dolore quidem. Placeat, eaque!
                            Exercitationem est facilis dolor quas odio cum
                            incidunt repudiandae vel. Lorem ipsum dolor sit amet
                            consectetur, adipisicing elit. Inventore illum
                            nostrum perferendis voluptas, voluptate soluta
                            corrupti dolore quidem. Placeat, eaque!
                            Exercitationem est facilis dolor quas odio cum
                            incidunt repudiandae vel. Lorem ipsum dolor sit amet
                            consectetur, adipisicing elit. Inventore illum
                            nostrum perferendis voluptas, voluptate soluta
                            corrupti dolore quidem. Placeat, eaque!
                            Exercitationem est facilis dolor quas odio cum
                            incidunt repudiandae vel.
                        </p>
                    </main>
                    <div className="btn-wrap">
                        <ModifyBtn />
                        <DeleteBtn />
                    </div>
                </div>
            </article>
        </div>
    );
}
