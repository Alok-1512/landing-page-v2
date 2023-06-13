import { CreateProfile, EmployerHero, hireCandidate, shareJob, JobSeekerService } from "../assets"

export const CollegePageData = {
    heroSection: {
        lookingFor: 'Looking for placements?',
        heading: 'Gethire Campus Is The Solution',
        cta_label: 'Talk to sales',
        cta_link: '',
        hero_img: EmployerHero,
        hero_alt: ''
    },
    ctaSection: {
        title: 'Student Placement',
        description: 'Gethire works closely with colleges and universities to connect them with industries for education, training and placement. Start your journey with 3 simple steps:',
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
                step_cta: 'Start Community',
                step_cta_link: ''
            },
            {
                number: 'Step 3',
                step_img: hireCandidate,
                step_alt: 'Gethire: meet right candidate',
                step_cta: 'Host Companies',
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
            heading: 'Let us know what your students are looking for',
            description: 'At Gethire we aim to bridge industry-academic gap and help students become skilled. Tell us what are they looking for:',
            buttons: [
                'Mentors', 'Training and Placement', 'Freelance Work'
            ]
        },
        rightSide: {
            headline: 'Place your students as per their interest of work:',
            buttons: [
                'Tech', 'Non Tech', 'Sales', 'HR', 'Travel', 'Influencer Marketing', 'Finance', 'Food', 'Music', 'Gig Work', 'Freelance', 'Arts and Craft', 'Marketing', 'Photography'
            ]
        }
    },
    redirectSection: {
        main_img: JobSeekerService,
        main_img_alt: '',
        headline: 'Lets make students happy with Gethire Campus services',
        buttons: [
            'Consulting', 'Connects', 'Marketing', 'Community'
        ]

    }

} 