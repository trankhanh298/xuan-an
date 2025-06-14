import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header class="main-header">
        <div class="container">
            <div class="logo">
                <a href="#">Your Organic Farm Logo</a>
            </div>
            <nav class="main-nav">
                <ul>
                    <li><a href="#shop">Shop</a></li>
                    <li><a href="#how-it-works">How It Works</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#">Blog</a></li>
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
                <h1>Fresh Organic Vegetables, Delivered to Your Door in Da Lat</h1>
                <p>Taste the difference of farm-fresh, chemical-free produce grown with care right here in Lâm Đồng.</p>
                <a href="#shop" class="btn btn-primary">Shop Our Produce Now</a>
            </div>
            <div class="hero-image-placeholder">
                <img src="https://via.placeholder.com/600x400/98C1D9/3D5A80?text=Vibrant+Organic+Veggies" alt="Placeholder image of fresh organic vegetables"/>
            </div>
        </div>
    </section>

    <section id="how-it-works" class="how-it-works-section">
        <div class="container">
            <h2>How It Works</h2>
            <div class="steps-grid">
                <div class="step-item">
                    <div class="step-icon">
                        <img src="https://via.placeholder.com/80x80/98C1D9/3D5A80?text=1" alt="Step 1 icon"/>
                    </div>
                    <h3>1. Choose Your Veggies</h3>
                    <p>Browse our seasonal selection of organic fruits, vegetables, and herbs.</p>
                </div>
                <div class="step-item">
                    <div class="step-icon">
                        <img src="https://via.placeholder.com/80x80/98C1D9/3D5A80?text=2" alt="Step 2 icon"/>
                    </div>
                    <h3>2. Order Online</h3>
                    <p>Add your favorites to your cart and complete your secure checkout.</p>
                </div>
                <div class="step-item">
                    <div class="step-icon">
                        <img src="https://via.placeholder.com/80x80/98C1D9/3D5A80?text=3" alt="Step 3 icon"/>
                    </div>
                    <h3>3. Fresh Delivery</h3>
                    <p>We deliver your farm-fresh goodness directly to your home in Da Lat.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="shop" class="featured-products-section">
        <div class="container">
            <h2>Our Fresh Organic Selection</h2>
            <div class="product-grid">
                <div class="product-card">
                    <img src="https://via.placeholder.com/300x200/98C1D9/3D5A80?text=Organic+Carrots" alt="Placeholder organic carrots"/>
                    <h3>Organic Carrots</h3>
                    <p class="price">50.000đ / kg</p>
                    <a href="#" class="btn btn-secondary">Add to Cart</a>
                </div>
                <div class="product-card">
                    <img src="https://via.placeholder.com/300x200/98C1D9/3D5A80?text=Organic+Lettuce" alt="Placeholder organic lettuce"/>
                    <h3>Organic Lettuce</h3>
                    <p class="price">35.000đ / head</p>
                    <a href="#" class="btn btn-secondary">Add to Cart</a>
                </div>
                <div class="product-card">
                    <img src="https://via.placeholder.com/300x200/98C1D9/3D5A80?text=Organic+Tomatoes" alt="Placeholder organic tomatoes"/>
                    <h3>Organic Tomatoes</h3>
                    <p class="price">45.000đ / kg</p>
                    <a href="#" class="btn btn-secondary">Add to Cart</a>
                </div>
                <div class="product-card">
                    <img src="https://via.placeholder.com/300x200/98C1D9/3D5A80?text=Seasonal+Berries" alt="Placeholder seasonal berries"/>
                    <h3>Seasonal Berries</h3>
                    <p class="price">80.000đ / pack</p>
                    <a href="#" class="btn btn-secondary">Add to Cart</a>
                </div>
            </div>
            <a href="#" class="btn btn-primary-outline">View All Products</a>
        </div>
    </section>

    <section id="about" class="about-us-section">
        <div class="container">
            <div class="about-image-placeholder">
                <img src="https://via.placeholder.com/500x350/98C1D9/3D5A80?text=Our+Da+Lat+Farm" alt="Placeholder image of an organic farm in Da Lat"/>
            </div>
            <div class="about-content">
                <h2>Our Story: Freshness from Da Lat</h2>
                <p>We are a family-owned organic farm nestled in the beautiful highlands of Da Lat, Lâm Đồng. With a passion for sustainable farming and a commitment to healthy living, we cultivate the finest organic vegetables using traditional methods and modern ecological practices.</p>
                <p>Every vegetable is harvested at its peak freshness and delivered directly to your home, ensuring you get the best of nature with every bite. We believe in transparency, quality, and nourishing our community.</p>
                <a href="#" class="btn btn-secondary-outline">Learn More About Our Farm</a>
            </div>
        </div>
    </section>

    <section class="newsletter-section">
        <div class="container">
            <h2>Stay Fresh with Our Newsletter!</h2>
            <p>Sign up for exclusive offers, new product alerts, and delicious organic recipes.</p>
            <form class="newsletter-form">
                <input type="email" placeholder="Enter your email address" required/>
                <button type="submit" class="btn btn-primary">Subscribe</button>
            </form>
        </div>
    </section>

    <footer class="main-footer">
        <div class="container">
            <div class="footer-col">
                <h3>Your Organic Farm</h3>
                <p>Fresh Organic Vegetables from Da Lat, Lâm Đồng, Vietnam</p>
                <p>Email: info@yourfarm.com</p>
                <p>Phone: +84 XXX XXX XXX</p>
            </div>
            <div class="footer-col">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#shop">Shop Now</a></li>
                    <li><a href="#how-it-works">How It Works</a></li>
                    <li><a href="#about">Our Story</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Privacy Policy</a></li>
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
                    <img src="https://via.placeholder.com/100x30/98C1D9/3D5A80?text=Payment+Logos" alt="Payment methods"/>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p>&copy; 2025 Your Organic Farm. All rights reserved.</p>
        </div>
    </footer>

    </div>
  );
}

export default App;
