import logo from './logo.svg';
import './App.css';
import heroImage from './assets/can-tay.jpg';
import tomatoImage from './assets/ca-chua.jpg';
import strawberryImage from './assets/dau-nhat.jpg';
import cucumberImage from './assets/dua-leo.jpg';
import aboutImage from './assets/about-me.jpg';

function App() {
  return (
    <div className="App">
      <header class="main-header">
        <div class="container">
            <div class="logo">
                <a href="#">Yêu Cỏ Cây</a>
            </div>
            <nav class="main-nav">
                <ul>
                    <li><a href="#shop">Sản phẩm</a></li>
                    <li><a href="#how-it-works">Quy trình mua hàng</a></li>
                    <li><a href="#about">Tôi là ai</a></li>
                    <li><a href="#contact">Liên hệ</a></li>
                    <li><a href="#">Cẩm nang sức khoẻ</a></li>
                </ul>
            </nav>
            <div class="utility-icons">
                <a href="#" class="search-icon">🔍</a>
                <a href="#" class="cart-icon">🛒 <span class="cart-count">0</span></a>
                <a href="#" class="account-icon">👤</a>
            </div>
        </div>
      </header>

      <section class="hero-section">
        <div class="container">
            <div class="hero-content">
                <h1>Nông sản thuận tự nhiên, giao tận nhà</h1>
                <p>Hãy bảo vệ sức khoẻ cho bạn và gia đình từ việc sử dụng những sản phẩm tự nhiên không phân thuốc hoá học.</p>
                <a href="#shop" class="btn btn-primary">Quẹo lựa nào</a>
            </div>
            <div class="hero-image-placeholder">
                <img src={heroImage} alt="Organic vegetables"/>
            </div>
        </div>
    </section>

    <section id="how-it-works" class="how-it-works-section">
        <div class="container">
            <h2>Quy trình mua hàng</h2>
            <div class="steps-grid">
                <div class="step-item">
                    {/* <div class="step-icon">
                        <img src="https://via.placeholder.com/80x80/98C1D9/3D5A80?text=1" alt="Step 1 icon"/>
                    </div> */}
                    <h3>1. Liên Hệ Chúng tôi qua số điện thoại</h3>
                    <p>Bạn có thể kết bạn qua Zalo hoặc gọi điện trực tiếp qua số: +84 336 691 846.</p>
                </div>
                <div class="step-item">
                    {/* <div class="step-icon">
                        <img src="https://via.placeholder.com/80x80/98C1D9/3D5A80?text=2" alt="Step 2 icon"/>
                    </div> */}
                    <h3>2. Tư vấn cùng chuyên viên bán hàng</h3>
                    <p>Nhận thông tin về tình trạng sản phẩm, giá hiện tại liên quan đến sản phẩm bạn quan tâm.</p>
                </div>
                <div class="step-item">
                    {/* <div class="step-icon">
                        <img src="https://via.placeholder.com/80x80/98C1D9/3D5A80?text=3" alt="Step 3 icon"/>
                    </div> */}
                    <h3>3. Lên đơn hàng</h3>
                    <p>Chốt danh sách và số lượng sản phẩm, Yêu Cỏ Cây sẽ giao hàng đến nhà bạn. Sau khi xác nhận đơn hàng, bạn có thể yên tâm thanh toán bằng cách chuyển khoản.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="shop" class="featured-products-section">
        <div class="container">
            <h2>Một số sản phẩm tiêu biểu</h2>
            <div class="product-grid">
                <div class="product-card">
                    <img src={tomatoImage} alt="Tomato"/>
                    <h3>Organic Carrots</h3>
                    <p class="price">50.000đ / kg</p>
                    <a href="#" class="btn btn-secondary">Add to Cart</a>
                </div>
                <div class="product-card">
                    <img src={strawberryImage} alt="Strawberry"/>
                    <h3>Organic Lettuce</h3>
                    <p class="price">180.000đ / hộp</p>
                    <a href="#" class="btn btn-secondary">Add to Cart</a>
                </div>
                <div class="product-card">
                    <img src={cucumberImage} alt="Cucumber"/>
                    <h3>Organic Tomatoes</h3>
                    <p class="price">45.000đ / kg</p>
                    <a href="#" class="btn btn-secondary">Add to Cart</a>
                </div>
            </div>
            <a href="#" class="btn btn-primary-outline">View All Products</a>
        </div>
    </section>

    <section id="about" class="about-us-section">
        <div class="container">
            <div class="about-image-placeholder">
                <img src={aboutImage} alt="Đôi lời về Yêu Cỏ Cây"/>
            </div>
            <div class="about-content">
                <h2>Câu chuyện của chúng tôi: Bỏ phố về rừng</h2>
                <p>Chúng tôi là một nhà cung cấp rau hữu cơ và những sản phẩm sạch đến từ khu vực Lâm Đồng nói riêng và Tây Nguyên nói chung. Với sự yêu thích và cam kết về sự bền vững trong nông nghiệp và sức khỏe, chúng tôi chỉ phân phối những sản phẩm sạch và chất lượng đến tay người tiêu dùng.</p>
                <p>Mỗi loại rau đều được trồng theo hướng hữu cơ, không sử dụng phân thuốc hoá học, đảm bảo bạn nhận được những thứ tốt nhất từ thiên nhiên với mỗi bữa ăn.</p>
                <a href="#" class="btn btn-secondary-outline">Tìm hiểu thêm về nông trại của chúng tôi</a>
            </div>
        </div>
    </section>

    <section class="newsletter-section">
        <div class="container">
            <h2>Cập nhật tin tức mới nhất thông qua kênh Zalo va FB của chúng tôi!</h2>
            <p>Zalo: </p>
            <p>FB: </p>
        </div>
    </section>

    <footer class="main-footer">
        <div class="container">
            <div class="footer-col">
                <h3>Yêu Cỏ Cây</h3>
                <p>Nông Sản Thuận Tự Nhiên, Lâm Đồng, Việt Nam</p>
                <p>Phone: +84 336 691 846</p>

            </div>
            <div class="footer-col">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#how-it-works">How It Works</a></li>
                    <li><a href="#about">Our Story</a></li>
                    <li><a href="#">FAQs</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h3>Connect With Us</h3>
                <div class="social-icons">
                    <a href="#" target="_blank">Facebook</a>
                    <a href="#" target="_blank">Instagram</a>
                    <a href="#" target="_blank">Zalo</a>
                </div>
                <div class="payment-methods">
                    <img src="https://via.placeholder.com/100x30/98C1D9/3D5A80?text=Payment+Logos" alt="Mã QR chuyển tiền"/>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p>&copy; 2025 Yêu Cỏ Cây. All rights reserved.</p>
        </div>
    </footer>

    </div>
  );
}

export default App;
