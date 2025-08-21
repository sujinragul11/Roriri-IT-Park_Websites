import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  try {
    // Create admin user
    const hashedPassword = await bcrypt.hash('admin123', 12);
    
    const admin = await prisma.user.upsert({
      where: { email: 'admin@roririsoft.com' },
      update: {},
      create: {
        username: 'admin',
        email: 'admin@roririsoft.com',
        password: hashedPassword,
        role: 'ADMIN'
      }
    });

    console.log('✅ Admin user created:', admin.email);

    // Create sample instructors
    const instructor1 = await prisma.instructor.upsert({
      where: { id: 'instructor-1' },
      update: {},
      create: {
        id: 'instructor-1',
        name: 'Dr. Rajesh Kumar',
        bio: 'Senior Software Engineer with 15+ years of experience in full-stack development',
        experience: '15+ years in software development',
        expertise: 'React, Node.js, Python, Cloud Computing',
        imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
        linkedinUrl: 'https://linkedin.com/in/rajesh-kumar'
      }
    });

    const instructor2 = await prisma.instructor.upsert({
      where: { id: 'instructor-2' },
      update: {},
      create: {
        id: 'instructor-2',
        name: 'Priya Sharma',
        bio: 'Data Science expert and AI researcher with industry and academic experience',
        experience: '12+ years in data science and AI',
        expertise: 'Python, Machine Learning, Deep Learning, Data Analytics',
        imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
        linkedinUrl: 'https://linkedin.com/in/priya-sharma'
      }
    });

    console.log('✅ Instructors created');

    // Create sample courses
    const course1 = await prisma.course.upsert({
      where: { id: 'course-1' },
      update: {},
      create: {
        id: 'course-1',
        title: 'Full Stack Web Development',
        description: 'Master modern web development with React, Node.js, and MongoDB',
        duration: '6 months',
        price: 25000,
        level: 'BEGINNER',
        technologies: 'React, Node.js, MongoDB, Express, JavaScript',
        imageUrl: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg',
        instructorId: instructor1.id
      }
    });

    const course2 = await prisma.course.upsert({
      where: { id: 'course-2' },
      update: {},
      create: {
        id: 'course-2',
        title: 'Data Science & AI',
        description: 'Learn Python, Machine Learning, and AI development',
        duration: '8 months',
        price: 35000,
        level: 'INTERMEDIATE',
        technologies: 'Python, TensorFlow, Pandas, Scikit-learn, Jupyter',
        imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
        instructorId: instructor2.id
      }
    });

    console.log('✅ Courses created');

    // Create sample products
    await prisma.product.createMany({
      data: [
        {
          id: 'product-1',
          name: 'Premium Floor Tiles',
          description: 'High-quality ceramic floor tiles for modern homes',
          category: 'FLOOR',
          size: '60x60 cm',
          color: 'White',
          price: 150,
          stockQuantity: 500,
          imageUrls: JSON.stringify(['https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg'])
        },
        {
          id: 'product-2',
          name: 'Designer Wall Tiles',
          description: 'Elegant wall tiles with modern patterns',
          category: 'WALL',
          size: '30x60 cm',
          color: 'Grey',
          price: 120,
          stockQuantity: 300,
          imageUrls: JSON.stringify(['https://images.pexels.com/photos/6585760/pexels-photo-6585760.jpeg'])
        }
      ],
      skipDuplicates: true
    });

    console.log('✅ Products created');

    // Create sample packages
    await prisma.package.createMany({
      data: [
        {
          id: 'package-1',
          name: 'Farm Experience Package',
          description: 'Complete farm tour with organic meals and activities',
          price: 2500,
          duration: '2 days',
          includes: 'Farm tour, organic meals, accommodation, activities',
          maxPeople: 10,
          imageUrls: JSON.stringify(['https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg'])
        },
        {
          id: 'package-2',
          name: 'Weekend Getaway',
          description: 'Perfect weekend escape to nature',
          price: 1800,
          duration: '1 day',
          includes: 'Farm tour, lunch, nature walk',
          maxPeople: 15,
          imageUrls: JSON.stringify(['https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg'])
        }
      ],
      skipDuplicates: true
    });

    console.log('✅ Packages created');

    // Create sample jobs
    await prisma.job.createMany({
      data: [
        {
          id: 'job-1',
          title: 'Senior Full Stack Developer',
          department: 'Engineering',
          location: 'Remote',
          type: 'FULL_TIME',
          description: 'We are looking for an experienced full stack developer to join our team',
          requirements: 'React, Node.js, 5+ years experience',
          salaryRange: '₹8-12 LPA'
        },
        {
          id: 'job-2',
          title: 'Data Scientist',
          department: 'Analytics',
          location: 'Hybrid',
          type: 'FULL_TIME',
          description: 'Join our data science team to build AI-powered solutions',
          requirements: 'Python, Machine Learning, 3+ years experience',
          salaryRange: '₹10-15 LPA'
        }
      ],
      skipDuplicates: true
    });

    console.log('✅ Jobs created');

    // Create sample gallery images
    await prisma.gallery.createMany({
      data: [
        {
          businessType: 'IT_ACADEMY',
          title: 'Modern Classroom',
          description: 'State-of-the-art learning environment',
          imageUrl: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg',
          altText: 'Students learning in modern classroom',
          sortOrder: 1
        },
        {
          businessType: 'RITHISH_FARMS',
          title: 'Organic Farm',
          description: 'Beautiful organic farming landscape',
          imageUrl: 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg',
          altText: 'Organic farm with green fields',
          sortOrder: 1
        },
        {
          businessType: 'ROSHAN_TILES',
          title: 'Tile Showroom',
          description: 'Premium tile collection display',
          imageUrl: 'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg',
          altText: 'Modern tile showroom',
          sortOrder: 1
        }
      ],
      skipDuplicates: true
    });

    console.log('✅ Gallery images created');

    console.log('🎉 Database seeding completed successfully!');
    
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });