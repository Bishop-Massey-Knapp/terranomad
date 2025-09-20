import { useState } from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import terraNomadLogo from './assets/terranomad-logo.png'
import './App.css'

function App() {
  // Initialize state with TerraNomad products
  const [products] = useState([
    {
      id: 1,
      name: "NEMO Stargaze EVO-X Recliner Luxury Chair",
      price: 179.95,
      description: "Never has luxury comfort been so easily accessible to all, anywhere. NEMO’s newest chair joins the Stargaze™ family and boasts a one-step set-up while offering the same swinging and auto-reclining action as its predecessor. Enjoy the calming hammock-like motion and simply lean back to recline to your preferred angle – perfect for taking in the night sky.",
      category: "Camping Chairs",
      image: "1-nemo-stargaze.jpg"
    },
    {
      id: 2,
      name: "GCI Outdoor Freestyle Rocker Mesh Chair",
      price: 80.00,
      description: "Unwind in the original rocking chair that revolutionized outdoor seating – the GCI Outdoor Freestyle Rocker. Pioneering patented Spring-Action Rocking Technology™, the Freestyle Rocker sets a new standard for comfort and convenience, allowing outdoor enthusiasts to enjoy smooth rocking on any flat surface.",
      category: "Camping Chairs",
      image: "2-rocker-mesh.jpg"
    },
    {
      id: 3,
      name: "Osprey Daylite Jr Backpack",
      price: 33.99,
      description: "Daylite and daylite plus are compatible as an attachment to several osprey travel and backpacking bags for additional storage and carry options.",
      category: "Backpacks",
      image: "3-osprey-daylite-jr.jpg"
    },
    {
      id: 4,
      name: "Osprey Packs Women's Ariel 55 Pack",
      price: 225.99,
      description: "Winner of the 2021 Backpacker Editors’ Choice Gold Award. Ideal for anyone in need of a pack with a fine-tuned fit, the women’s-specific Ariel 55 fits a variety of body shapes and sizes. A Custom Fit-on-the-Fly™ Hipbelt and Shoulder Straps, and adjustable torso length offers a fine-tuned fit and an injection-molded backpanel delivers breathable, close-to-body performance. Made with bluesign® APPROVED nylon and PFC-free DWR. Raincover included.",
      category: "Backpacks",
      image: "4-ariel-55-pack.jpg"
    },
    {
      id: 5,
      name: "Patagonia Black Hole Mini MLC",
      price: 199.00,
      description: "Large main compartment has two interior organization pockets, plus an exterior stretch-mesh pocket that fits a range of water bottles; pack volume is 30 liters.",
      category: "Backpacks",
      image: "5-patagonia-black-hole.jpg"
    },
    {
      id: 6,
      name: "Leatherman ARC Premium Multi-Tool",
      price: 249.99,
      description: "Arc® is Leatherman’s premium multipurpose tool that raises the bar for the entire industry. The knife blade is made of CPM MagnaCut steel which has excellent edge retention and excels in corrosion resistance, toughness, and ease of sharpening. The perfect everyday carry knife ready for the expected and unexpected.",
      category: "Camping Tools",
      image: "6-leatherman-arc.jpg"
    }
  ])

  return (
    <>
      <Navbar />
      
      <main id="home" className="main-content">
        <section className="hero">
          <img 
            src={terraNomadLogo} 
            alt="TerraNomad" 
            className="hero-logo"
          />
          <h2>Pack Light. Live Big.</h2>
          <p>
            Trail-ready gear for those who measure life in miles, not meetings.
          </p>
        </section>

        <section id="shop" className="products-section">
          <ProductList products={products} />
        </section>
      </main>

      <section id="about" className="about-section">
        <div className="about-content">
          <h2>About TerraNomad</h2>
          <p>
            Born from a love of wild places and well-made gear, TerraNomad equips explorers with essentials built to outlast the trail.
            From titanium mugs to forged-steel blades, every item is chosen for durability, function, and timeless design.
          </p>
          <p>
            Whether you’re chasing mountain sunrises or carving new paths in your own backyard, TerraNomad is your basecamp for adventure.
          </p>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-content">
          <h2>Get In Touch</h2>
          <p>Have questions about our products or finding your next adventure? We'd love to hear from you!</p>
          <div className="contact-info">
            <p><strong>Email:</strong> hello@terranomad.com</p>
            <p><strong>Phone:</strong> (555) 123-4567</p>
            <p><strong>Address:</strong> 123 Adventure Lane, Outdoor City, OC 12345</p>
          </div>
        </div>
      </section>

      <footer className="app-footer">
        <p>&copy; 2024 TerraNomad - Sustainable Adventure Gear</p>
      </footer>
    </>
  )
}

export default App
