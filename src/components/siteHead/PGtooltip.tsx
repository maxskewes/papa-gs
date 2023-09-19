import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

const RICH_TAWNY = '#593c05';

const PGtooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} arrow />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: '#f7e5ba',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    background: 'radial-gradient( #f7e5ba 60%, #e8ba4d 100%)',
    color: RICH_TAWNY,
    boxShadow: theme.shadows[1],
    fontSize: 12,
    fontFamily: 'Ribeye',
    fontWeight: 600,
    textTransform: 'uppercase',
  },
}));

export default PGtooltip;
