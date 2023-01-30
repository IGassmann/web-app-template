import { serve } from 'inngest/next';

import trackUserSignUps from '@/features/analytics/track-user-sign-ups';
import updateUserInfo from '@/features/analytics/update-user-info';

export default serve('Web App Template', [trackUserSignUps, updateUserInfo]);
