import Image from 'next/image'

import { Heading2, Anchor } from './ui/Text'

import styles from '../styles/components/Hallway.module.scss'

export default function Hallway(props) {
  return (
    <HallwayComponent>
      {props.children}
    </HallwayComponent>
  )
}

export const HallwayMembers = () => {
  return (
    <>
      <HallwayCard
        title="The Courses"
        link="/courses"
        image="/images/index/member-hallway-courses.jpg"
      />

      <HallwayCard
        title="Memberships"
        link="/memberships"
        image="/images/index/member-hallway-memberships.jpg"
      />

      <HallwayCard
        title="Clubhouse & Dining"
        link="/clubhouse"
        image="/images/index/member-hallway-clubhouse.jpg"
      />

      <HallwayCard
        title="Newsletter"
        link="/newsletter"
        image="/images/index/member-hallway-newsletter.jpg"
      />

      <HallwayCard
        title="Events"
        link="/events"
        image="/images/index/hallway-events.jpg"
      />

      <HallwayCard
        title="Contact Us"
        link="/contact"
        image="/images/index/member-hallway-contact.jpg"
      />
    </>
  )
}

export const HallwayPublic = () => {
  return (
    <>
      <HallwayCard
        title="About Us"
        link="/about"
        image="/images/index/hallway-about.jpg"
      />
      <HallwayCard
        title="Memberships"
        link="/memberships"
        image="/images/index/hallway-memberships.jpg"
      />
      <HallwayCard
        title="Game Improvement"
        link="/game"
        image="/images/index/hallway-game.jpg"
      />
      <HallwayCard
        title="Clubhouse & Dining"
        link="/clubhouse"
        image="/images/index/hallway-clubhouse.jpg"
      />
      <HallwayCard
        title="Events"
        link="/events"
        image="/images/index/hallway-events.jpg"
      />
      <HallwayCard
        title="Contact Us"
        link="/contact"
        image="/images/index/hallway-contact.jpg"
      />
    </>
  )
}

function HallwayCard({
  title,
  link,
  image
}) {
  return (
    <div className={styles.HallwayCard}>
      <Anchor href={link}>
        <a>
          <div className={styles.HallwayCardImage}>
            <Image 
              src={image}
              alt="Card Background"
              width={800}
              height={600}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className={styles.HallwayCardContent}>
            <div className={styles.HallwayCardContentWrapper}>
              <Heading2 BaronNeue>{title}</Heading2>
            </div>
          </div>
        </a>
      </Anchor>
    </div>
  )
}

function HallwayComponent(props) {
  return <div className={styles.Hallway} {...props} />
}