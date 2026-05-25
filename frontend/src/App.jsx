import Home from './app/App';
import './App.css';

function App() {
  return (
    <div>
      {/* Header */}
      <header className="dec-header">
        <div className="dec-logo">
          <div className="dec-logo-icon">F</div>
          <span className="dec-logo-text">FitCart</span>
          <span className="dec-logo-sub">.in</span>
        </div>

        <div className="dec-search">
          <input type="text" placeholder="Search exercises, records..." />
          <button className="dec-search-btn">🔍</button>
        </div>

        <div className="dec-header-actions">
          <div className="dec-action-item">
            <span className="icon">👤</span>
            <span>Account</span>
          </div>
          <div className="dec-action-item">
            <span className="icon">❤️</span>
            <span>Wishlist</span>
          </div>
          <button className="dec-cart-btn">
            🛒 <span>Cart</span>
          </button>
        </div>
      </header>

      {/* Navigation */}
      <nav className="dec-nav">
        <a href="#" className="active">All Sports</a>
        <a href="#">Fitness</a>
        <a href="#">Strength Training</a>
        <a href="#">Cardio</a>
        <a href="#">Nutrition</a>
        <a href="#">New Arrivals</a>
        <a href="#">Offers</a>
      </nav>

      {/* Hero Banner */}
      <div className="dec-banner">
        <div className="dec-banner-content">
          <div className="dec-banner-eyebrow">🏋️ Your Personal Fitness Tracker</div>
          <h1>Track Your <span>Progress.</span><br />Crush Every Goal.</h1>
          <p>Log your exercises, monitor your body weight, and track your nutrition — all in one place.</p>
          <button className="dec-banner-cta">Start Tracking →</button>
        </div>
        <div className="dec-banner-stats">
          <div className="dec-stat-card">
            <div className="dec-stat-number">💪</div>
            <div className="dec-stat-label">Strength</div>
          </div>
          <div className="dec-stat-card">
            <div className="dec-stat-number">🔥</div>
            <div className="dec-stat-label">Intensity</div>
          </div>
          <div className="dec-stat-card">
            <div className="dec-stat-number">🏆</div>
            <div className="dec-stat-label">Results</div>
          </div>
        </div>
      </div>

      <p className="dec-section-title"><span></span>Gym Records</p>

      <Home />
    </div>
  );
}

export default App;
