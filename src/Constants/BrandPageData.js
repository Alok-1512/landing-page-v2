import { CreateProfile, EmployerHero, hireCandidate, shareJob, JobSeekerService } from "../assets"

export const BrandPageData = {
    heroSection: {
        lookingFor: 'Looking for promotion?',
        heading: 'Lets Promote Your Product And Services',
        cta_label: 'Talk to sales',
        cta_link: '',
        hero_img: EmployerHero,
        hero_alt: ''
    },
    ctaSection: {
        title: 'Promote Now',
        description: 'Gethire makes your brand visible across community via online and offline channel. Start promotion with three simple steps:',
        steps: [
            {
                number: 'Step 1',
                step_img: CreateProfile,
                step_alt: 'Gethire: Create profile to find right fit',
                step_cta: 'Set Up Meeting',
                step_cta_link: ''
            },
            {
                number: 'Step 2',
                step_img: shareJob,
                step_alt: 'Gethire: share job post',
                step_cta: 'Set Milestones',
                step_cta_link: ''
            },
            {
                number: 'Step 3',
                step_img: hireCandidate,
                step_alt: 'Gethire: meet right candidate',
                step_cta: 'Lets Achieve',
                step_cta_link: ''
            }
        ],
        main_cta: {
            label: 'Talk to Sales',
            link: ''
        }
    },
    interestSection: {
        leftSide: {
            heading: 'Let us know whom do you want to reach out',
            description: 'With Gethire community you can promote your product, brand and service directly. Let us know whom you want to reach:',
            buttons: [
                'Colleges', 'Students', 'HR Professionals'
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
        headline: 'Lets explore this journey together with Gethire Service',
        buttons: [
            'Consulting', 'Connects', 'Marketing', 'Community'
        ]

    }

} 