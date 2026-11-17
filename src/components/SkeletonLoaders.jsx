import React from 'react';
import './SkeletonLoaders.scss';

export function SkeletonBox({ width = '100%', height = '20px', borderRadius = '6px', className = '' }) {
  return (
    <div
      className={`skeleton-shimmer-box ${className}`}
      style={{ width, height, borderRadius }}
    />
  );
}

export function ServiceCardSkeleton() {
  return (
    <article className="service-card-skeleton">
      <div className="skeleton-header">
        <SkeletonBox width="42px" height="42px" borderRadius="10px" />
        <SkeletonBox width="70px" height="22px" borderRadius="4px" />
      </div>

      <div className="skeleton-body">
        <SkeletonBox width="45%" height="14px" borderRadius="4px" className="mb-2" />
        <SkeletonBox width="85%" height="24px" borderRadius="6px" className="mb-3" />
        <SkeletonBox width="100%" height="16px" borderRadius="4px" className="mb-2" />
        <SkeletonBox width="75%" height="16px" borderRadius="4px" className="mb-4" />

        <div className="skeleton-scope-list">
          <SkeletonBox width="90%" height="14px" borderRadius="4px" className="mb-2" />
          <SkeletonBox width="80%" height="14px" borderRadius="4px" className="mb-2" />
          <SkeletonBox width="85%" height="14px" borderRadius="4px" />
        </div>
      </div>

      <div className="skeleton-footer">
        <SkeletonBox width="120px" height="16px" borderRadius="4px" />
        <SkeletonBox width="26px" height="26px" borderRadius="50%" />
      </div>
    </article>
  );
}

export function ServiceGridSkeleton({ count = 6 }) {
  return (
    <div className="services-grid-skeleton">
      {Array.from({ length: count }).map((_, idx) => (
        <ServiceCardSkeleton key={idx} />
      ))}
    </div>
  );
}

export function ServiceDetailSkeleton() {
  return (
    <div className="service-detail-skeleton wrap">
      <div className="detail-skeleton-breadcrumb mb-4">
        <SkeletonBox width="220px" height="32px" borderRadius="999px" />
      </div>

      <div className="detail-skeleton-split mb-5">
        <div className="detail-skeleton-left">
          <SkeletonBox width="240px" height="26px" borderRadius="999px" className="mb-3" />
          <SkeletonBox width="80%" height="52px" borderRadius="8px" className="mb-4" />
          <SkeletonBox width="100%" height="20px" borderRadius="4px" className="mb-2" />
          <SkeletonBox width="90%" height="20px" borderRadius="4px" className="mb-4" />
          <SkeletonBox width="180px" height="46px" borderRadius="999px" />
        </div>

        <div className="detail-skeleton-right">
          <SkeletonBox width="100%" height="280px" borderRadius="16px" />
        </div>
      </div>

      <div className="detail-skeleton-visual-strip">
        <SkeletonBox width="100%" height="170px" borderRadius="14px" />
        <SkeletonBox width="100%" height="170px" borderRadius="14px" />
        <SkeletonBox width="100%" height="170px" borderRadius="14px" />
      </div>
    </div>
  );
}

