const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/$1', 
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
    'framer-motion': '<rootDir>/__mocks__/framer-motion.js',
    '^motion/react-client$': '<rootDir>/__mocks__/motion-react-client.js',
     '^@deemlol/next-icons$': '<rootDir>/__mocks__/@deemlol/next-icons.js',
  },
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
}

module.exports = createJestConfig(config)
