-- CreateEnum
CREATE TYPE "public"."UserRole" AS ENUM ('ADMIN', 'MANAGER', 'STAFF');

-- CreateEnum
CREATE TYPE "public"."CourseLevel" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'ALL_LEVELS');

-- CreateEnum
CREATE TYPE "public"."ProductCategory" AS ENUM ('FLOOR', 'WALL', 'OUTDOOR', 'DECORATIVE');

-- CreateEnum
CREATE TYPE "public"."JobType" AS ENUM ('FULL_TIME', 'PART_TIME', 'CONTRACT', 'INTERNSHIP', 'REMOTE');

-- CreateEnum
CREATE TYPE "public"."BookingType" AS ENUM ('FARM', 'INDUSTRIAL', 'TILES', 'COURSE', 'OTHER');

-- CreateEnum
CREATE TYPE "public"."InquiryType" AS ENUM ('GENERAL', 'COURSE', 'PRODUCT', 'PACKAGE', 'JOB', 'SUPPORT');

-- CreateEnum
CREATE TYPE "public"."BusinessType" AS ENUM ('IT_ACADEMY', 'RITHISH_FARMS', 'ROSHAN_TILES', 'INDUSTRIAL_VISITS', 'RORIRISOFT');

-- CreateTable
CREATE TABLE "public"."users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'ADMIN',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."instructors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT,
    "experience" TEXT,
    "expertise" TEXT,
    "image_url" TEXT,
    "linkedin_url" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "instructors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."courses" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "level" "CourseLevel" NOT NULL DEFAULT 'BEGINNER',
    "technologies" TEXT,
    "image_url" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "instructor_id" TEXT,

    CONSTRAINT "courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."course_enrollments" (
    "id" TEXT NOT NULL,
    "student_name" TEXT NOT NULL,
    "student_email" TEXT NOT NULL,
    "student_phone" TEXT,
    "preferred_batch" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "course_id" TEXT NOT NULL,

    CONSTRAINT "course_enrollments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" "ProductCategory" NOT NULL DEFAULT 'FLOOR',
    "size" TEXT,
    "color" TEXT,
    "price" DECIMAL(10,2) NOT NULL,
    "stock_quantity" INTEGER NOT NULL DEFAULT 0,
    "imageUrls" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."packages" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "duration" TEXT,
    "includes" TEXT,
    "max_people" INTEGER,
    "imageUrls" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "packages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."jobs" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "department" TEXT,
    "location" TEXT,
    "type" "JobType" NOT NULL DEFAULT 'FULL_TIME',
    "description" TEXT NOT NULL,
    "requirements" TEXT NOT NULL,
    "salary_range" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."job_applications" (
    "id" TEXT NOT NULL,
    "applicant_name" TEXT NOT NULL,
    "applicant_email" TEXT NOT NULL,
    "applicant_phone" TEXT,
    "resume_url" TEXT,
    "cover_letter" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "job_id" TEXT NOT NULL,

    CONSTRAINT "job_applications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."bookings" (
    "id" TEXT NOT NULL,
    "type" "BookingType" NOT NULL,
    "customer_name" TEXT NOT NULL,
    "customer_email" TEXT NOT NULL,
    "customer_phone" TEXT,
    "booking_date" TIMESTAMP(3),
    "number_of_people" INTEGER,
    "special_requests" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "total_amount" DECIMAL(10,2),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "package_id" TEXT,

    CONSTRAINT "bookings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."inquiries" (
    "id" TEXT NOT NULL,
    "type" "InquiryType" NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "subject" TEXT,
    "message" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'new',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "inquiries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."gallery" (
    "id" TEXT NOT NULL,
    "business_type" "BusinessType" NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "image_url" TEXT NOT NULL,
    "alt_text" TEXT,
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "gallery_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "public"."users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- AddForeignKey
ALTER TABLE "public"."courses" ADD CONSTRAINT "courses_instructor_id_fkey" FOREIGN KEY ("instructor_id") REFERENCES "public"."instructors"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."course_enrollments" ADD CONSTRAINT "course_enrollments_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."job_applications" ADD CONSTRAINT "job_applications_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "public"."jobs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."bookings" ADD CONSTRAINT "bookings_package_id_fkey" FOREIGN KEY ("package_id") REFERENCES "public"."packages"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Insert sample course data
INSERT INTO "public"."courses" (
  "id", 
  "title", 
  "description", 
  "duration", 
  "price", 
  "level", 
  "technologies", 
  "image_url", 
  "is_active", 
  "created_at", 
  "updated_at"
) VALUES
  (
    gen_random_uuid(), 
    'Full Stack Development', 
    'Learn full stack web development with modern technologies including frontend and backend development', 
    '6 months', 
    500.00, 
    'BEGINNER', 
    'HTML,CSS,JavaScript,React,Node.js,Express,PostgreSQL', 
    'fullstack.jpg', 
    true, 
    NOW(), 
    NOW()
  ),
  (
    gen_random_uuid(), 
    'Data Science & AI', 
    'Learn data analysis, machine learning and artificial intelligence concepts with hands-on projects', 
    '6 months', 
    600.00, 
    'INTERMEDIATE', 
    'Python,Pandas,NumPy,Scikit-learn,TensorFlow,AI', 
    'datascience.jpg', 
    true, 
    NOW(), 
    NOW()
  ),
  (
    gen_random_uuid(), 
    'Cloud Computing', 
    'Learn AWS, Azure and Google Cloud Platform cloud services and deployment strategies', 
    '4 months', 
    400.00, 
    'INTERMEDIATE', 
    'AWS,Azure,GCP,Docker,Kubernetes,Terraform', 
    'cloud.jpg', 
    true, 
    NOW(), 
    NOW()
  ),
  (
    gen_random_uuid(), 
    'Mobile App Development', 
    'Learn to build cross-platform Android & iOS apps using modern frameworks', 
    '5 months', 
    450.00, 
    'BEGINNER', 
    'Flutter,React Native,Dart,JavaScript', 
    'mobile.jpg', 
    true, 
    NOW(), 
    NOW()
  ),
  (
    gen_random_uuid(), 
    'UI/UX Design', 
    'Learn user interface and user experience design principles and tools', 
    '3 months', 
    350.00, 
    'BEGINNER', 
    'Figma,Adobe XD,Sketch,User Research,Wireframing', 
    'uiux.jpg', 
    true, 
    NOW(), 
    NOW()
  ),
  (
    gen_random_uuid(), 
    'Cybersecurity', 
    'Learn ethical hacking, network security, and cybersecurity defense strategies', 
    '4 months', 
    500.00, 
    'INTERMEDIATE', 
    'Networking,Security,Penetration Testing,Ethical Hacking', 
    'cybersecurity.jpg', 
    true, 
    NOW(), 
    NOW()
  ),
  (
    gen_random_uuid(), 
    'DevOps Engineering', 
    'Learn continuous integration, continuous deployment, and infrastructure automation', 
    '5 months', 
    550.00, 
    'ADVANCED', 
    'Docker,Kubernetes,Jenkins,GitLab CI,Ansible', 
    'devops.jpg', 
    true, 
    NOW(), 
    NOW()
  ),
  (
    gen_random_uuid(), 
    'Blockchain Development', 
    'Learn blockchain technology, smart contracts, and decentralized application development', 
    '4 months', 
    600.00, 
    'INTERMEDIATE', 
    'Solidity,Ethereum,Web3.js,Smart Contracts', 
    'blockchain.jpg', 
    true, 
    NOW(), 
    NOW()
  );

-- Insert sample instructor data
INSERT INTO "public"."instructors" (
  "id",
  "name",
  "bio",
  "experience",
  "expertise",
  "image_url",
  "linkedin_url",
  "is_active",
  "created_at",
  "updated_at"
) VALUES
  (
    gen_random_uuid(),
    'Dr. Sarah Johnson',
    '10+ years of experience in full stack development and software architecture',
    'Senior Software Engineer at Tech Giants',
    'JavaScript, React, Node.js, Cloud Architecture',
    'sarah.jpg',
    'https://linkedin.com/in/sarahjohnson',
    true,
    NOW(),
    NOW()
  ),
  (
    gen_random_uuid(),
    'Prof. Michael Chen',
    'Data scientist and AI researcher with PhD in Machine Learning',
    'Lead Data Scientist at AI Research Lab',
    'Machine Learning, Python, Data Analysis, AI',
    'michael.jpg',
    'https://linkedin.com/in/michaelchen',
    true,
    NOW(),
    NOW()
  ),
  (
    gen_random_uuid(),
    'Emma Rodriguez',
    'Cloud architect and DevOps expert with certifications in AWS and Azure',
    'Cloud Solutions Architect at Cloud Services Inc.',
    'AWS, Azure, GCP, DevOps, Infrastructure',
    'emma.jpg',
    'https://linkedin.com/in/emmarodriguez',
    true,
    NOW(),
    NOW()
  );

-- Update some courses with instructor IDs
UPDATE "public"."courses" 
SET "instructor_id" = (
  SELECT "id" FROM "public"."instructors" WHERE "name" = 'Dr. Sarah Johnson' LIMIT 1
) 
WHERE "title" = 'Full Stack Development';

UPDATE "public"."courses" 
SET "instructor_id" = (
  SELECT "id" FROM "public"."instructors" WHERE "name" = 'Prof. Michael Chen' LIMIT 1
) 
WHERE "title" = 'Data Science & AI';

UPDATE "public"."courses" 
SET "instructor_id" = (
  SELECT "id" FROM "public"."instructors" WHERE "name" = 'Emma Rodriguez' LIMIT 1
) 
WHERE "title" IN ('Cloud Computing', 'DevOps Engineering');