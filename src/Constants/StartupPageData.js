import { CreateProfile, EmployerHero, hireCandidate, shareJob, JobSeekerService } from "../assets"

export const StartupPageData = {
    heroSection: {
        lookingFor: 'Are you a startup?',
        heading: 'Lets Walk This Journey Together !',
        cta_label: 'Talk to sales',
        cta_link: '',
        hero_img: EmployerHero,
        hero_alt: ''
    },
    ctaSection: {
        title: 'Promote Now',
        description: 'Gethire makes your brand visible across community via online and offline channel. Start promotion with three simple steps:',
        buttons: [
            'Consulting', 'Resource Planning', 'Recruitment', 'Growth', 'Gig Work', 'Freelance Work'
        ],
        cta_img: EmployerHero,
    },
    interestSection: {
        leftSide: {
            heading: 'Let Us Know What Problem You Face',
            description: 'At Gethire, we are committed to help startup in their journey. We provide our services at best possible way to make them feel ease.',
            buttons: [
                'Resources', 'Mentoring', 'Assistance'
            ]
        },
        rightSide: {
            headline: 'Connect with people across multiple domains:',
            buttons: [
                'Tech', 'Non Tech', 'Sales', 'HR', 'Travel', 'Influencer Marketing', 'Finance', 'Food', 'Music', 'Gig Work', 'Freelance', 'Arts and Craft', 'Marketing', 'Photography'
            ]
        }
    },
    redirectSection: {
        main_img: JobSeekerService,
        main_img_alt: '',
        headline: 'Lets find the hidden path to success with Gethire Service',
        buttons: [
            'Consulting', 'Connects', 'Marketing', 'Community'
        ]

    }

} 