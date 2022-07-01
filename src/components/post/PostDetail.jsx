import PreviousBtn from "./PreviousBtn";
import ModifyBtn from "./ModifyBtn";
import DeleteBtn from "./DeleteBtn";
import LikeBtn from "./LikeBtn";
import CategoryBtn from "./CategoryBtn";
import backgroundImg from "../../assets/post-background6.jpg";
import authorData from "../../db/data.json";
import "./postDetail.css";

export default function PostDetail(props) {
    return (
        <div>
            <div className="post-banner">
                <div className="post-banner-inside">
                    <div className="post-banner-date-cont">
                        <span>May</span>
                        <span>25</span>
                        <span>Wednesday</span>
                    </div>
                </div>
            </div>
            <article className="post-wrap">
                <div className="post-inner">
                    <header>
                        <PreviousBtn />
                        <div className="author-wrap">
                            <img
                                src={`.${authorData.posts[5]["profileImg"]}`}
                                alt="글쓴이 프로필 이미지"
                            />
                            <span className="writer">Chilli</span>
                            <span className="date">2022.05.25</span>
                        </div>
                        <div className="category-wrap">
                            <CategoryBtn theme="Life" className="blue" />
                            <CategoryBtn theme="Style" className="blue" />
                        </div>
                        <h2>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </h2>
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
                        <img src={backgroundImg} alt="" />
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
