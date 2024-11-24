import { Helmet } from "react-helmet-async";
import Header from "../components/Header";

export default function Faq() {
  return (
    <div>
      <Helmet>
        <title>GadgetHavenTech | FAQ</title>
      </Helmet>
      <div className="bg-primary">
        <Header
          title="FAQ?"
          subtitle="Find answers to all your queries about our laptops, phones, and accessories in our FAQ section. Simplified solutions for your shopping experience!"
        />
      </div>
      <div className="container mx-auto px-10 my-12">
        <div className="collapse collapse-plus bg-primary/30 mb-4">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Q.1: How do I place an order?
          </div>
          <div className="collapse-content">
            <p>
              To place an order, start by browsing our collection of laptops,
              phones, and accessories. Click on Add to Cart for the items you
              want to purchase. Then proceed to the checkout page, provide your
              shipping details, and choose your payment method. Finally, confirm
              your order, and you will receive a confirmation email or SMS with
              order details.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-primary/30 mb-4">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Q.2: What payment methods do you accept?
          </div>
          <div className="collapse-content">
            <p>
              We offer a variety of secure payment options to ensure convenience
              for our customers. These include debit/credit cards Visa,
              MasterCard, Amex, mobile banking services such as bKash and Nagad,
              and cash on delivery for selected locations. All payments are
              processed securely, and your payment details are kept
              confidential.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-primary/30 mb-4">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Q.3: Do you provide warranties for laptops and phones?
          </div>
          <div className="collapse-content">
            <p>
              Yes, all our laptops and phones come with an official manufacturer
              warranty. Warranty durations typically range from 6 to 24 months
              depending on the brand and product type. Details about warranty
              coverage are available on each product page. In case of any
              issues, you can directly claim the warranty through authorized
              service centers.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-primary/30 mb-4">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Q.4: How long does delivery take?
          </div>
          <div className="collapse-content">
            <p>
              Delivery time depends on your location. For metropolitan areas,
              products are usually delivered within 3-5 business days. For more
              remote areas, it might take up to 7 business days. We partner with
              trusted couriers to ensure your products arrive safely and on
              time. You’ll also receive tracking updates to monitor the status
              of your delivery.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-primary/30">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Q.5: Can I return or exchange a product?
          </div>
          <div className="collapse-content">
            <p>
              Yes, we have a customer-friendly return and exchange policy. If
              you’re not satisfied with your purchase, you can return or
              exchange it within 7 days of delivery, provided it is unused,
              undamaged, and in its original packaging. Please review our return
              policy on the website for detailed instructions and eligibility
              criteria.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
