'use client'
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const donationItems = [
  {
    name: 'Food Package',
    price: 500,
    description: 'Provides meals for a family of four for one week',
  },
  {
    name: 'Education Kit',
    price: 1000,
    description: 'School supplies for one child',
  },
  {
    name: 'Medical Aid',
    price: 2000,
    description: 'Basic medical supplies and assistance',
  },
];

export default function Donate() {
  return (
    <div className="pt-24">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-center mb-12">Make a Donation</h1>

            {/* Direct Money Donation */}
            <Card className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Direct Money Donation</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                    Amount (₹)
                  </label>
                  <input
                    type="number"
                    id="amount"
                    min="100"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <Button type="submit">Proceed to Pay</Button>
              </form>
            </Card>

            {/* Item Donations */}
            <h2 className="text-2xl font-semibold mb-6">Donate Specific Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {donationItems.map((item, index) => (
                <Card key={index} className="text-center">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <p className="text-2xl font-bold text-purple-600 mb-4">₹{item.price}</p>
                  <div className="flex items-center justify-center gap-4">
                    <input
                      type="number"
                      min="1"
                      defaultValue="1"
                      className="w-20 px-2 py-1 rounded border border-gray-300"
                    />
                    <Button variant="secondary">Add</Button>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}