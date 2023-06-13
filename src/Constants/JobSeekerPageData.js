import { CreateProfile, EmployerHero, hireCandidate, shareJob, JobSeekerService } from "../assets"

export const JobSeekerPageData = {
    heroSection: {
        lookingFor: 'Looking for Job ?',
        heading: 'Find Job With AI Search Engine',
        cta_label: 'Talk to sales',
        cta_link: '',
        hero_img: EmployerHero,
        hero_alt: ''
    },
    ctaSection: {
        title: 'Apply For Job',
        description: 'Gethire provides you exclusive access to job opening that match with your skillset, interest and requirement. Follow three simple steps to get a job:',
        steps: [
            {
                number: 'Step 1',
                step_img: CreateProfile,
                step_alt: 'Gethire: Create profile to find right fit',
                step_cta: 'Sign Up',
                step_cta_link: ''
            },
            {
                number: 'Step 2',
                step_img: shareJob,
                step_alt: 'Gethire: share job post',
                step_cta: 'Create Profile',
                step_cta_link: ''
            },
            {
                number: 'Step 3',
                step_img: hireCandidate,
                step_alt: 'Gethire: meet right candidate',
                step_cta: 'Find Best Opportunity',
                step_cta_link: ''
            }
        ],
        main_cta: {
            label: 'Create Profile',
            link: ''
        }
    },
    interestSection: {
        leftSide: {
            heading: 'Let us know what your type of job you need:',
            description: 'At Gethire we provide jobs as per your interest of work type and work mode. Let us know how you want to work:',
            buttons: [
                'Full Time', 'Part Time ', 'Freelancer'
            ]
        },
        rightSide: {
            headline: 'Let Us Know To Whom Are You Hiring:',
            buttons: [
                'Tech', 'Non Tech', 'Sales', 'HR', 'Travel', 'Influencer Marketing', 'Finance', 'Food', 'Music', 'Gig Work', 'Freelance', 'Arts and Craft', 'Marketing', 'Photography'
            ]
        }
    },
    redirectSection: {
        main_img: JobSeekerService,
        main_img_alt: '',
        headline: 'Forget About Worries Of Finding Job When You Have Gethire Service',
        buttons: [
            'Consulting', 'Connects', 'Learning', 'Community'
        ]

    },
    pricingSection: [
        {
            title: 'Free',
            description: 'It will be free, till you feel valued.',
            amount: '0',
            duration: 'NA',
            features: [
                'Profile Creation', 'Recommendation', 'Job Search', 'Job Application',
                'Community Access', 'HR Communication', 'Financial Assistance'
            ]
        },
        {
            title: 'Freshers',
            description: 'Your trust matters a lot for us. We are there whenever you need.',
            amount: '1000',
            duration: 'Monthly',
            features: [
                'Profile Creation', 'Recommendation', 'Job Search', 'Job Application',
                'Community Access', 'HR Communication', 'Financial Assistance', 'Verified Profile', 'Pemium Tagging', 'KAM', 'CV Creation Assistance', 'Cover Letter Assistance', 'Personalised Recommendation'
            ]
        },
        {
            title: 'Professional',
            description: 'Your long term commitment gives us strength to fight against all odds and make things work for you.',
            amount: '10000',
            duration: 'NA',
            features: [
                'Profile Creation', 'Recommendation', 'Job Search', 'Job Application',
                'Community Access', 'HR Communication', 'Financial Assistance', 'Verified Profile', 'Pemium Tagging', 'KAM', 'CV Creation Assistance', 'Cover Letter Assistance', 'Personalised Recommendation', 'Career Consulting'
            ]
        }
    ]
} 