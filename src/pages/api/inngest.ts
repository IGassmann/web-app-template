import { serve } from 'inngest/next';

import inngest from '@/features/common/inngest';
import testInngest from '@/features/admin/testInngest';
import trackUserSignUps from '@/features/analytics/trackUserSignUps';
import updateUserInfo from '@/features/analytics/updateUserInfo';

export default serve(inngest, [trackUserSignUps, updateUserInfo, testInngest]);
