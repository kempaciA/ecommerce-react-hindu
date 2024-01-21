/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import blogList from "../utilis/blogdata";
import PageHeader from "../components/PageHeader";


import Tags from "../shop/Tags";
import PopularPost from "../shop/PopularPost";

const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" },
];

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);

  const { id } = useParams();
  // console.log(id)

  const result = blog.filter((b) => b.id === Number(id));

  return (
    <div>
      <PageHeader title={"Single Blog Page"} curPage={"Blog / Blog Details"} />

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            {/* LEFT SIDE */}
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt=""
                                  className="w-100"
                                />
                              </div>
                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className="val.iconName">
                                          {val.text}
                                        </i>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Repellendus vitae deleniti
                                  quisquam error, expedita dolores nesciunt
                                  aliquam aspernatur architecto. Id sunt
                                  incidunt consequuntur alias necessitatibus
                                  pariatur itaque fugit ratione rem eos, iure
                                  sint quae laborum. Cum, totam in fugiat
                                  mollitia aperiam provident quam laborum quidem
                                  odio, soluta esse porro sequi eos beatae
                                  dolorem tempore ea, quisquam natus? Unde a
                                  laboriosam distinctio cum fugit nobis deserunt
                                  optio eius, sed, omnis saepe architecto facere
                                  sit quos quae vel esse excepturi labore
                                  aspernatur qui earum tenetur aperiam! Ipsum
                                  aliquam, ex itaque sint nisi vel numquam.
                                  Sequi corporis officiis, sed facere similique
                                  dolorem aliquam.
                                </p>
                                <blockquote>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Mollitia magni sed placeat
                                    doloribus id provident dignissimos quos,
                                    libero delectus sit.
                                  </p>
                                  <cite>
                                    <a href="#">..Melissa Hunter</a>
                                  </cite>
                                </blockquote>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur,
                                  adipisicing elit. Consectetur amet provident
                                  eius explicabo at soluta? Voluptates maxime
                                  repellendus similique animi cumque.
                                  Perferendis architecto, eum exercitationem
                                  reiciendis cumque natus cupiditate fuga
                                  placeat quam repudiandae quibusdam et
                                  excepturi voluptatibus odit quis. Possimus
                                  minima veniam sit non perferendis excepturi,
                                  sint quod exercitationem rerum.
                                </p>
                                <img
                                  src="/src/assets/images/blog/single/01.jpg"
                                  alt=""
                                />
                                <p>
                                  Lorem ipsum dolor sit amet consectetur,
                                  adipisicing elit. Consectetur amet provident
                                  eius explicabo at soluta? Voluptates maxime
                                  repellendus similique animi cumque.
                                  Perferendis architecto, eum exercitationem
                                  reiciendis cumque natus cupiditate fuga
                                  placeat quam repudiandae quibusdam et
                                  excepturi voluptatibus odit quis. Possimus
                                  minima veniam sit non perferendis excepturi,
                                  sint quod exercitationem rerum.
                                </p>
                                <div className="video-thumb">
                                  <img
                                    src="/src/assets/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    href="https://youtu.be/s7gbh_u4iUM?si=LOjnnUaU8BMr1bAp"
                                    className="video-button popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur,
                                  adipisicing elit. Consectetur amet provident
                                  eius explicabo at soluta? Voluptates maxime
                                  repellendus similique animi cumque.
                                  Perferendis architecto, eum exercitationem
                                  reiciendis cumque natus cupiditate fuga
                                  placeat quam repudiandae quibusdam et
                                  excepturi voluptatibus odit quis. Possimus
                                  minima veniam sit non perferendis excepturi,
                                  sint quod exercitationem rerum.
                                </p>
                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {socialList.map((val, i) => (
                                      <li key={i}>
                                        <a href="#" className={val.className}>
                                          <i className={val.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="navigations-part">
                      <div className="left">
                          <a href="#" className="prev">
                            <i className="icofont-double-left">Previous Blog</i>
                          </a>
                          <a href="#" className="title">
                            <i>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum?</i>
                          </a>
                      </div>
                      <div className="right">
                                      <a href="#" className="prev">
                                        <i className="icofont-double-right">Next Article</i>
                                      </a>
                                      <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit?</a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>



              

            {/* RIGHT SIDE */}
            <div className="col-lg-4 col-12">
              <aside>
                <Tags />
                <PopularPost />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
