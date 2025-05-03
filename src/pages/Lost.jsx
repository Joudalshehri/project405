import React, { useEffect, useState } from 'react';

// Component to display lost items with filtering and search
const Lost = () => {
  const [allItems, setAllItems] = useState([]);         // All items from the backend
  const [filteredItems, setFilteredItems] = useState([]); // Items after applying filters
  const [searchTerm, setSearchTerm] = useState('');     // Text entered in search box
  const [activeFilter, setActiveFilter] = useState('الكل'); // Currently selected filter

  // Fetch lost items data from the server when component mounts
  useEffect(() => {
    fetch('http://localhost:5000/reports')
      .then(res => res.json())
      .then(data => {
        setAllItems(data);           // Save all items
        setFilteredItems(data);      // Initialize filtered view
      })
      .catch(error => console.error('خطأ في تحميل البيانات:', error));
  }, []);

  // Filter items by type when a filter button is clicked
  const filterItems = (type) => {
    setActiveFilter(type);            // Update active filter
    applyFilters(type, searchTerm);   // Apply filter and search together
  };

  // Filter items based on search input
  const searchItems = () => {
    applyFilters(activeFilter, searchTerm);
  };

  // Apply both category filter and search keyword
  const applyFilters = (type, keyword) => {
    let filtered = [...allItems];

    if (type !== 'الكل') {
      filtered = filtered.filter(item => item.itemType === type);
    }

    if (keyword) {
      filtered = filtered.filter(item =>
        item.itemName.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    setFilteredItems(filtered); // Update the view
  };

  return (
    <div dir="rtl">
      <div className="background"></div>

      {/* Top bar with filter buttons and search box */}
      <div className="top-bar">
        <div className="filter-buttons">
          {['أخرى', 'الأجهزة', 'الملابس', 'الكل'].map(type => (
            <button
              key={type}
              className={activeFilter === type ? 'active-filter' : ''}
              onClick={() => filterItems(type)}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="search-container">
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="...ابحث"
          />
          <button onClick={searchItems}><i className="fas fa-search"></i></button>
        </div>
      </div>

      {/* Items display area */}
      <div className="items-container">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div key={index} className="item-card">
              <img
                src={item.image ? `http://localhost:5000/uploads/${item.image}` : 'https://via.placeholder.com/150'}
                alt={item.itemName}
              />
              <div className="item-title">{item.itemName}</div>
              <div className="item-type">النوع: {item.itemType}</div>
              <div className="item-type">التاريخ: {item.date}</div>
              <div className="item-type">الوقت: {item.time}</div>
              <div className="item-type">الموقع: {item.location}</div>
              <button className="details-button">التفاصيل</button>
            </div>
          ))
        ) : (
          <p style={{ color: 'white', textAlign: 'center', marginTop: '80px' }}>
            لا توجد عناصر مطابقة
          </p>
        )}
      </div>
    </div>
  );
};

export default Lost;
