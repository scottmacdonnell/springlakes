import Link from 'next/link'
import Image from 'next/image'

import Container from './ui/Container'

import styles from '../styles/components/CoursesShowcase.module.scss'

export default function CoursesShowcase(props) {
  return (
    <Container>
      <div className={styles.CoursesShowcase}>
        <CourseCard
          title="The North Course"
          link="/courses/north"
          image="/images/courses/north/banner.jpg"
        />
        
        <CourseCard
          title="The South Course"
          link="/courses/south"
          image="/images/courses/south/banner.jpg"
        />
        
        <CourseCard
          title="The East Course"
          link="/courses/east"
          image="/images/courses/east/banner.jpg"
        />
      </div>

    </Container>
  )
}

function CourseCard({
  title,
  link,
  image
}) {
  return (
    <div className={styles.CourseCard}>
      <Link href={link}>
        <a>
          <div className={styles.CourseCardImage}>
            <Image 
              src={image}
              alt="Card Background"
              width={1080}
              height={360}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className={styles.CourseCardContent}>
            <div className={styles.CourseCardContentWrapper}>
              <h2>{title}</h2>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}