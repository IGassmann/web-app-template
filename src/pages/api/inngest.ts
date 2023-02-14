import { serve } from 'inngest/next';

import inngest from '@/features/common/inngest';
import trackUserSignUps from '@/features/analytics/trackUserSignUps';
import updateUserInfo from '@/features/analytics/updateUserInfo';

export default serve(inngest, [trackUserSignUps, updateUserInfo]);
