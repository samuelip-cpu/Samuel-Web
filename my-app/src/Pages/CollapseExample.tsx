import { useState } from 'react';
import { Collapse } from 'react-collapse';

function CollapseExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Basic Collapse Example</h2>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '10px'
        }}
      >
        {isOpen ? 'Collapse' : 'Expand'}
      </button>
      <Collapse isOpened={isOpen}>
        <div style={{
          padding: '20px',
          backgroundColor: '#f8f9fa',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}>
          <p>This is collapsible content. It smoothly expands and collapses when you click the button.</p>
          <p>You can put any content here - text, images, forms, or other components.</p>
        </div>
      </Collapse>
    </div>
  );
}

export default CollapseExample;