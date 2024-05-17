import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../Footer";
import Header from "../Home/Header";
import Loading from "../../more/Loader";
import MetaData from "../../more/Metadata";
import "./About.css";
import BottomTab from "../../more/BottomTab";

const About = () => {
  const { loading } = useSelector((state) => state.profile);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title="Giới thiệu" />
          <div>
            <Header />
            <div
              style={{
                width: "90%",
                margin: "0px auto",
              }}
            >
              <div className="about__page">
                {/* 1st verse */}
                <div className="row flex">
                  <div className="col__2">
                    <img src="https://example.com/your-image-url.jpg" alt="MTA's Pet Shop" />
                  </div>
                  <div className="col__2">
                    <div className="meta">
                      <span
                        style={{
                          fontSize: "40px",
                          fontWeight: "700",
                          lineHeight: "1.2",
                        }}
                      >
                        Chào mừng đến với MTA's Pet Shop!!!
                      </span>
                      <p>
                        MTA's Pet Shop là một thương hiệu chuyên về phụ kiện thú cưng tại Việt Nam, phục vụ cho các "boss" yêu thương của bạn.
                        <br />
                        ĐA DẠNG CÁC LOẠI PHỤ KIỆN chính là phong cách hiện tại của MTA's Pet Shop.
                      </p>
                      <p>
                        Đặc biệt, PHỤ KIỆN TỐI GIẢN - ĐƠN GIẢN - THỂ THAO dành cho tất cả các loại thú cưng, phù hợp với nhiều giống loài và kích cỡ là loại sản phẩm đang được quan tâm nhất. Sản phẩm chiếm trưng bày lên đến 50% diện tích cửa hàng. Mọi người dễ dàng chọn được những món phụ kiện cơ bản và thiết yếu nhất dành cho thú cưng của mình.
                      </p>
                      <p>
                        <h1>1"</h1>
                        <h2>MTA's Pet Shop</h2> mang đến cho khách hàng những sản phẩm CHẤT LƯỢNG TỐT với GIÁ THÀNH RẺ nhất so với chất lượng mang lại.
                        <br />
                        <br />
                        MTA's Pet Shop luôn nghiên cứu, phát triển mỗi ngày để mang đến những sản phẩm đa dạng về chất liệu, nhiều tính năng, đa dạng giá thành... mang lại nhiều sự lựa chọn hơn cho khách hàng.
                      </p>
                      <p>
                        <h1>2"</h1>
                        Mang đến những sản phẩm thiết kế đa dạng của các nhà thiết kế trẻ, bắt kịp xu hướng phụ kiện thú cưng thế giới nhanh chóng nhất để đưa đến với các tín đồ yêu thú cưng tại Việt Nam.
                        <br />
                        <br />
                        Các sản phẩm phụ kiện tại MTA's Pet Shop rất đa dạng, có thể phục vụ nhiều nhu cầu trang bị cho thú cưng ở nhiều lứa tuổi và kích cỡ khác nhau. Dù bạn thuộc phong cách chăm sóc thú cưng nào, MTA's Pet Shop tự tin có thể mang đến sản phẩm phụ kiện phù hợp với phong cách của bạn.
                        <br />
                        MTA's Pet Shop ĐA DẠNG VỀ PHỤ KIỆN, mỗi loại mang một cá tính khác biệt. MTA's Pet Shop ĐÁP ỨNG NHIỀU NHU CẦU trang bị cho thú cưng.
                        <br />
                        Không chỉ với vòng cổ, MTA's Pet Shop có tất cả các item phụ kiện cần thiết. Chỉ cần lượn nhẹ một vòng bạn sẽ trang bị đủ từ đầu đến chân, từ trong ra ngoài, cho đến phụ kiện đi kèm phù hợp với mọi nhu cầu: dạo chơi, lễ hội, du lịch, đi dạo hoặc ở nhà..v.v..
                      </p>
                      <p>
                        <h1>3"</h1>
                        <h2>MTA's Pet Shop</h2> Luôn duy trì chế độ bảo hành 365 ngày đối với mọi sản phẩm.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2nd verse */}
                <div className="second">
                  <div className="heading">
                    <h2>Chúng tôi cung cấp những gì?</h2>
                  </div>
                  <div className="row flex">
                    <div className="col__3">
                      <div
                        style={{
                          padding: "10px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg" alt="Best Prices & Offers" />
                        </div>
                        <span>Giá & Ưu đãi Tốt nhất</span>
                        <p>
                          Chúng tôi cung cấp các phụ kiện với giá cả hợp lý nhất và nhiều ưu đãi hấp dẫn.
                        </p>
                      </div>
                    </div>
                    <div className="col__3">
                      <div
                        style={{
                          padding: "10px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-2.svg" alt="High Quality Products" />
                        </div>
                        <span>Sản phẩm chất lượng cao</span>
                        <p>
                          Các sản phẩm của chúng tôi đều được chọn lọc kỹ càng để đảm bảo chất lượng tốt nhất cho thú cưng của bạn.
                        </p>
                      </div>
                    </div>
                    <div className="col__3">
                      <div
                        style={{
                          padding: "15px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-3.svg" alt="Fast Delivery System" />
                        </div>
                        <span>Hệ thống giao hàng nhanh</span>
                        <p>
                          Chúng tôi có hệ thống giao hàng nhanh chóng và đáng tin cậy.
                        </p>
                      </div>
                    </div>

                    <div className="col__3">
                      <div
                        style={{
                          padding: "15px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-4.svg" alt="Easy Returns" />
                        </div>
                        <span>Dịch vụ trả hàng dễ dàng</span>
                        <p>
                          Chính sách trả hàng của chúng tôi rất linh hoạt và thuận tiện cho khách hàng.
                        </p>
                      </div>
                    </div>

                    <div className="col__3">
                      <div
                        style={{
                          padding: "15px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-5.svg" alt="100% Satisfaction" />
                        </div>
                        <span>100% hài lòng</span>
                        <p>
                          Chúng tôi cam kết mang lại sự hài lòng 100% cho khách hàng với sản phẩm và dịch vụ của mình.
                        </p>
                      </div>
                    </div>

                    <div className="col__3">
                      <div
                        style={{
                          padding: "15px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-6.svg" alt="Great Daily Deal" />
                        </div>
                        <span>Ưu đãi hằng ngày</span>
                        <p>
                          Chúng tôi luôn có những ưu đãi hấp dẫn hàng ngày cho khách hàng.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
          <BottomTab />
        </>
      )}
    </>
  );
};

export default About;
