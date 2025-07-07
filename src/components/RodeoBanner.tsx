import React, { useState } from 'react';
import { Info, AlertTriangle, XCircle, CheckCircle2, Bell, X } from 'lucide-react';

type BannerType = 'info' | 'warning' | 'error' | 'success' | 'alert';
type BannerSize = 'large' | 'small';

interface RodeoBannerProps {
  type?: BannerType;
  size?: BannerSize;
  header: string;
  description?: string;
  actionText?: string;
  onAction?: () => void;
  className?: string;
  closable?: boolean;
}

const RodeoBanner = ({
  type = 'info',
  size = 'large',
  header,
  description,
  actionText,
  onAction,
  className = '',
  closable = true
}: RodeoBannerProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const icons = {
    info: Info,
    warning: AlertTriangle,
    error: XCircle,
    success: CheckCircle2,
    alert: Bell
  };

  const colors = {
    info: {
      bg: '#EFF6FF',
      border: '1px solid #93C5FD',
      icon: '#3B82F6'
    },
    warning: {
      bg: '#FEFCE8',
      border: '1px solid #FCD34D',
      icon: '#D97706'
    },
    error: {
      bg: '#FEE2E2',
      border: '1px solid #FCA5A5',
      icon: '#EF4444'
    },
    success: {
      bg: '#ECFDF5',
      border: '1px solid #6EE7B7',
      icon: '#10B981'
    },
    alert: {
      bg: '#F5F3FF',
      border: '1px solid #C4B5FD',
      icon: '#8B5CF6'
    }
  };

  const Icon = icons[type];
  const { bg, border, icon } = colors[type];
  const minHeight = size === 'large' ? '72px' : '48px';
  const padding = size === 'large' ? '16px' : '8px';

  if (!isVisible) return null;

  return (
    <div
      className={className}
      style={{
        border,
        backgroundColor: bg,
        minHeight,
        padding,
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'flex-start',
      }}
    >
      <div style={{
        flexShrink: 0,
        color: icon,
        marginRight: '12px',
        marginTop: size === 'large' ? '10px' : '4px',
        marginLeft: size === 'small' ? '8px' : 0
      }}>
        <Icon style={{ height: '20px', width: '20px' }} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between'
        }}>
          <div style={{ color: '#1F2937' }}>
            {size === 'large' && (
              <h3 style={{
                fontWeight: 300,
                fontSize: '14px',
                lineHeight: '20px',
                margin: 0
              }}>
                {header}
              </h3>
            )}
            {description && (
              <p style={{
                marginTop: '4px',
                fontSize: '14px',
                lineHeight: '20px'
              }}>
                {description}
              </p>
            )}
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: '8px',
            marginLeft: '16px'
          }}>
            {actionText && onAction && (
              <button
                onClick={onAction}
                style={{
                  fontSize: '14px',
                  padding: '4px 12px',
                  fontWeight: 500,
                  color: '#1F2937',
                  cursor: 'pointer',
                  border: '1px solid #000',
                  borderRadius: '4px',
                  backgroundColor: 'transparent'
                }}
              >
                {actionText}
              </button>
            )}
            {closable && (
              <button
                onClick={() => setIsVisible(false)}
                style={{
                  color: '#6B7280',
                  cursor: 'pointer',
                  margin: '0 16px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  padding: 0
                }}
                aria-label="Close"
              >
                <X style={{ height: '20px', width: '20px' }} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RodeoBanner;