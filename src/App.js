import Card from './components/card'
export const plans = [
  {
    name: 'Hobby',
    price: 19,
    frequency: 'month',
    features: [
      'Nullam gravida elementum',
      'Mauris mauris neque',
      'Duis auctor tincidunt leo',
    ],
  },
  {
    name: 'Growth',
    price: 49,
    frequency: 'month',
    featured: true,
    features: [
      'Nullam gravida elementum',
      'Mauris mauris neque',
      'Duis auctor tincidunt leo',
    ],
  },
  {
    name: 'Scale',
    price: 99,
    frequency: 'month',
    features: [
      'Nullam gravida elementum',
      'Mauris mauris neque',
      'Duis auctor tincidunt leo',
    ],
  },
];

function App() {
  return (
    <div className="grid lg:grid-cols-3 gap-12 lg:gap-0">
      {
        plans.map((e) => (
          <div className={`w-full max-w-md mx-auto ${
            
            e.featured ? "order-first lg:order-none lg:scale-110 lg:transform lg:z-10" 
                       : "lg:transform lg:scale-90"
          }`}>
            <Card {...e} key={e.name} />
          </div>
        ))
      }

    </div>
  );
}

export default App;
