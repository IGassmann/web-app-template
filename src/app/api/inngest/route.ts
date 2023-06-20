import { serve } from 'inngest/next';

import inngest from '@/features/common/inngest';
import trackUserSignUps from '@/features/analytics/trackUserSignUps';
import updateUserInfo from '@/features/analytics/updateUserInfo';
import helloWorld from '@/app/api/hello/helloWorld';

export const { GET, POST, PUT } = serve(inngest, [trackUserSignUps, updateUserInfo, helloWorld]);
