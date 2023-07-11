import {Colors} from './colors';
import {scaleFont} from './metrics';

export const defaultTexts = {
  title: {
    fontWeight: '700',
    color: Colors.textBlack,
    fontSize: scaleFont(20),
    lineHeight: scaleFont(24),
    letterSpacing: 0,
  },
  bodyBold: {
    fontWeight: '700',
    color: Colors.textBlack,
    fontSize: scaleFont(16),
    lineHeight: scaleFont(19),
    letterSpacing: 0,
  },
  body: {
    fontWeight: '300',
    color: Colors.textBlack,
    fontSize: scaleFont(16),
    lineHeight: scaleFont(19),
    letterSpacing: 0,
  },
  bodySubtitle: {
    fontWeight: '300',
    color: Colors.textBlack,
    fontSize: scaleFont(14),
    lineHeight: scaleFont(16),
    letterSpacing: 0,
  },
};
