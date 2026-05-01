"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="small"
        sizing="medium"
        background="noiseDiagonalGradient"
        cardStyle="inset"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Lebo's Beauty"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Nail & Lash Artistry in Pretoria"
      description="Experience professional care and artistic designs at Lebo's Nail Bar & Beauty. Elevate your look with our expert services."
      testimonials={[
        {
          name: "Sarah M.",
          handle: "@sarah_nails",
          testimonial: "Best nails I've ever had! So professional and quick.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/fair-skinned-adult-woman-uses-roller-massager-while-sitting-her-beautician-light-studio-home-spa-facial-concept_197531-31464.jpg",
        },
        {
          name: "Thandi K.",
          handle: "@thandi_lash",
          testimonial: "My lashes are perfect every time. Highly recommend!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-attractive-stylish-lady-with-bright-makeup-smiling_291650-581.jpg",
        },
        {
          name: "Boity R.",
          handle: "@boity_style",
          testimonial: "The nail art is beyond expectations. Truly talented.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/satisfied-glad-young-pinup-woman-with-charming-smile-points-upper-right-corner_273609-17108.jpg",
        },
        {
          name: "Nthabi L.",
          handle: "@nthabi_b",
          testimonial: "Great service and comfortable environment. 10/10.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-woman-with-friends_23-2149152887.jpg",
        },
        {
          name: "Kamo M.",
          handle: "@kamo_nails",
          testimonial: "Professional, clean, and stunning results. Love it!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-caucasian-girl-gives-sniff-facial-serum-adult-woman-sitting-front-her-table-indoors-home-spa-facial-concept_197531-31460.jpg",
        },
      ]}
      buttons={[
        {
          text: "Book Appointment",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/man-vaping-from-hookah-indoors_23-2149173629.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/friends-helping-each-other-with-make-up-bed_23-2148708892.jpg",
          alt: "Client 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/front-view-cute-couple-wearing-linen-clothing_23-2150695729.jpg",
          alt: "Client 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-successful-agent-satisfied-customer-showing-thumb-up-while-sitting-table-using-tablet-together_74855-10029.jpg",
          alt: "Client 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/lesbian-couple-drinking-coffee_23-2148661087.jpg",
          alt: "Client 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-combing-hair-bed_23-2147767632.jpg",
          alt: "Client 5",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Excellence in Beauty"
      description="Lebo's Nail Bar & Beauty is dedicated to providing high-quality nail and lash services. We bring professional care to Kwaggafontein and Pretoria Central."
      metrics={[
        {
          value: "1000+",
          title: "Sets Done",
        },
        {
          value: "500+",
          title: "Happy Clients",
        },
        {
          value: "5+",
          title: "Years Experience",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/nail-care-concept-with-nail-polish-high-angle_23-2149046526.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "Nail Extensions",
          description: "Durable and elegant nail extensions to suit your style.",
          imageSrc: "http://img.b2bpic.net/free-photo/female-hands-with-beige-nail-design-holding-black-cup_127675-2659.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/tanned-hand-woman-with-gentle-beige-pink-manicure-covering-with-gel-polish_343596-6402.jpg",
          buttonText: "See More",
        },
        {
          title: "Lash Installations",
          description: "Professional lash extensions for a perfect, full look.",
          imageSrc: "http://img.b2bpic.net/free-photo/skillful-cosmetologist-lash-extension-procedure_181624-47041.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/fashion-beauty-portrait-young-brunette-woman-with-evening-stylish-makeup-perfect-clean-skin-sexy-model-with-hair-bun-posing-studio-with-pink-bright-natural-lips_158538-24112.jpg",
          buttonText: "See More",
        },
        {
          title: "Custom Nail Art",
          description: "Intricate and creative nail designs tailored for you.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-woman-with-pretty-manicure_23-2149311578.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-woman-with-french-manicure_23-2149311569.jpg",
          buttonText: "See More",
        },
      ]}
      title="Our Professional Services"
      description="We specialize in modern nail techniques and premium lash extensions to enhance your natural beauty."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",
          badge: "Essential",
          price: "R250",
          subtitle: "Basic Manicure",
          features: [
            "Nail shape",
            "Cuticle care",
            "Gel polish",
          ],
          buttons: [
            {
              text: "Book Now",
              href: "#contact",
            },
          ],
        },
        {
          id: "pro",
          badge: "Popular",
          price: "R450",
          subtitle: "Acrylic Full Set",
          features: [
            "Full acrylic set",
            "Shape",
            "Solid gel color",
          ],
          buttons: [
            {
              text: "Book Now",
              href: "#contact",
            },
          ],
        },
        {
          id: "premium",
          badge: "Artistic",
          price: "R600",
          subtitle: "Lash & Nail Combo",
          features: [
            "Full acrylic set",
            "Classic lash set",
            "Premium finish",
          ],
          buttons: [
            {
              text: "Book Now",
              href: "#contact",
            },
          ],
        },
      ]}
      title="Affordable Beauty Plans"
      description="Choose the perfect service to refresh your look."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          brand: "Lebo's",
          name: "Classic French Tip",
          price: "R300",
          rating: 5,
          reviewCount: "12",
          imageSrc: "http://img.b2bpic.net/free-photo/women-doing-makeup-with-brush-cosmetic_1150-4802.jpg",
        },
        {
          id: "p2",
          brand: "Lebo's",
          name: "Full Lash Set",
          price: "R500",
          rating: 5,
          reviewCount: "24",
          imageSrc: "http://img.b2bpic.net/free-photo/drawing-picture-her-make-up_181624-26492.jpg",
        },
        {
          id: "p3",
          brand: "Lebo's",
          name: "Glitter Acrylics",
          price: "R450",
          rating: 5,
          reviewCount: "8",
          imageSrc: "http://img.b2bpic.net/free-photo/female-hands-with-blue-nail-design-blue-glitter-nail-polish-manicure-woman-hands-blue-fabric-background_127675-2950.jpg",
        },
        {
          id: "p4",
          brand: "Lebo's",
          name: "Neon Summer Set",
          price: "R350",
          rating: 5,
          reviewCount: "15",
          imageSrc: "http://img.b2bpic.net/free-photo/model-posing-with-color-swatches_23-2150038325.jpg",
        },
        {
          id: "p5",
          brand: "Lebo's",
          name: "Volume Lash Set",
          price: "R600",
          rating: 5,
          reviewCount: "30",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-professional-wearing-gloves_23-2149627151.jpg",
        },
        {
          id: "p6",
          brand: "Lebo's",
          name: "Abstract Nail Art",
          price: "R400",
          rating: 5,
          reviewCount: "20",
          imageSrc: "http://img.b2bpic.net/free-photo/gray-background-with-dirty-artistic-hand_53876-123082.jpg",
        },
      ]}
      title="Our Latest Looks"
      description="Check out some of our recent transformations and nail art designs."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Thandi",
          imageSrc: "http://img.b2bpic.net/free-photo/group-friends-enjoying-street_329181-12573.jpg",
        },
        {
          id: "t2",
          name: "Boity",
          imageSrc: "http://img.b2bpic.net/free-photo/friendly-young-interracial-girls-good-mood-wear-nightgowns-pajama-party-leisure-lifestyle-beauty-concept_197531-31732.jpg",
        },
        {
          id: "t3",
          name: "Nthabi",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-beauty-salon-looking-into-mirror_1303-16737.jpg",
        },
        {
          id: "t4",
          name: "Sarah",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-woman-caring-her-skin-near-mirror-bathroom_1301-7643.jpg",
        },
        {
          id: "t5",
          name: "Kamo",
          imageSrc: "http://img.b2bpic.net/free-photo/young-business-woman-gray-dress-sitting-table-cafe-talking-oncell-phone-while-taking-notes-notebook-table-laptop-cup-coffee-student-learning-online-freelancer-working-online_231208-10933.jpg",
        },
        {
          id: "t6",
          name: "Lebo",
          imageSrc: "http://img.b2bpic.net/free-photo/beauty-happy-elegant-woman-with-curly-hair-makeup-wearing-red-dress-showing-her-face-smiling_1258-163938.jpg",
        },
      ]}
      cardTitle="Client Love"
      cardTag="Testimonials"
      cardAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      tag="Contact Us"
      title="Book Your Session"
      description="Ready to get those nails done? Send us a message or call to book your appointment."
      imageSrc="http://img.b2bpic.net/free-photo/view-luxurious-hotel-interior-space_23-2150683409.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
          ],
        },
        {
          items: [
            {
              label: "Pricing",
              href: "#pricing",
            },
            {
              label: "Book Now",
              href: "#contact",
            },
          ],
        },
        {
          items: [
            {
              label: "Pretoria Central",
              href: "#",
            },
            {
              label: "082 640 1988",
              href: "tel:0826401988",
            },
          ],
        },
      ]}
      logoText="Lebo's Nail Bar & Beauty"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
