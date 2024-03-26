import { QueryKeys } from '@/queryClient';
import { graphql } from 'msw';

export const handlers = [graphql.query(QueryKeys.PRODUCTS, (req, res, ctx) => {})];
