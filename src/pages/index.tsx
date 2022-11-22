import { useSegmentAnalytics } from '@/features/analytics/SegmentAnalyticsContext';
import { NextPage } from 'next';
import { useEffect } from 'react';

const HomePage: NextPage = () => {
  const analytics = useSegmentAnalytics();
  useEffect(() => {
    analytics.page();
  }, [analytics]);

  return <h1 className="text-3xl font-bold underline">Web App Template</h1>;
};

export default HomePage;
