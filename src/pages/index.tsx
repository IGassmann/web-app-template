import { useSegmentAnalytics } from '@/features/analytics/SegmentAnalyticsContext';
import { useEffect } from 'react';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  const analytics = useSegmentAnalytics();
  useEffect(() => {
    analytics.page();
  }, [analytics]);

  return <h1 className="text-3xl font-bold underline">Web App Template</h1>;
};

export default HomePage;
